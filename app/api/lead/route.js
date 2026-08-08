
let leads = [];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9]{7,15}$/;

function sanitize(value) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 500); 
}

function validateLead(body) {
  const errors = {};

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone);
  const countryCode = sanitize(body.countryCode);
  const company = sanitize(body.company);
  const domain = sanitize(body.domain);
  const candidates = sanitize(body.candidates);
  const deliveryMode = sanitize(body.deliveryMode);
  const location = sanitize(body.location);
  const message = sanitize(body.message);

  if (!name) errors.name = "Name is required.";
  else if (name.length < 2) errors.name = "Name is too short.";

  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_REGEX.test(email)) errors.email = "Enter a valid email address.";

  if (phone && !PHONE_REGEX.test(phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (candidates && (isNaN(Number(candidates)) || Number(candidates) < 0)) {
    errors.candidates = "Number of candidates must be a positive number.";
  }

  if (!deliveryMode) errors.deliveryMode = "Please select a mode of delivery.";

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    data: {
      name,
      email,
      countryCode: countryCode || "+91",
      phone,
      company,
      domain,
      candidates: candidates ? Number(candidates) : null,
      deliveryMode,
      location,
      message,
    },
  };
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object") {
    return Response.json(
      { success: false, error: "Request body must be a JSON object." },
      { status: 400 }
    );
  }

  const { isValid, errors, data } = validateLead(body);

  if (!isValid) {
    return Response.json(
      { success: false, error: "Validation failed.", fieldErrors: errors },
      { status: 400 }
    );
  }


  const oneMinuteAgo = Date.now() - 60 * 1000;
  const isDuplicate = leads.some(
    (l) => l.email === data.email && new Date(l.submittedAt).getTime() > oneMinuteAgo
  );

  if (isDuplicate) {
    return Response.json(
      { success: false, error: "You've already submitted an enquiry recently. Please wait a moment before trying again." },
      { status: 429 }
    );
  }

  const lead = {
    id: crypto.randomUUID(),
    ...data,
    submittedAt: new Date().toISOString(),
  };

  leads.push(lead);



  return Response.json(
    { success: true, lead: { id: lead.id, name: lead.name, email: lead.email } },
    { status: 201 }
  );
}

export async function GET(request) {

  const { searchParams } = new URL(request.url);
  const limit = Math.min(Number(searchParams.get("limit")) || 50, 200);

  const recent = [...leads]
    .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
    .slice(0, limit);

  return Response.json({ success: true, count: leads.length, leads: recent });
}