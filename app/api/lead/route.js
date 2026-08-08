// Simple mock API route (Next.js App Router route handler).
// POST  /api/lead  -> saves a lead capture form submission
// GET   /api/lead  -> returns all submissions received so far (for demo/debug)
//
// Data is kept in memory only (resets on server restart) since this is a
// mock backend for the assignment. Swap this out for a real database call
// (e.g. Prisma, Supabase, a CRM webhook) in a real project.

let leads = [];

export async function POST(request) {
  const body = await request.json();
  const { name, email, phone, company, message } = body;

  if (!name || !email) {
    return Response.json(
      { success: false, error: "Name and email are required." },
      { status: 400 }
    );
  }

  const lead = {
    id: Date.now(),
    name,
    email,
    phone: phone || "",
    company: company || "",
    message: message || "",
    submittedAt: new Date().toISOString(),
  };

  leads.push(lead);

  return Response.json({ success: true, lead }, { status: 201 });
}

export async function GET() {
  return Response.json({ success: true, leads });
}
