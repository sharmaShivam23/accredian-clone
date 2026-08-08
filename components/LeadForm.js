"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const initialForm = { name: "", email: "", phone: "", company: "", message: "" };

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <section id="lead-form" className="px-5 sm:px-8 py-16 bg-slate-50">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          title="Speak With Our Advisor"
          highlight="Our Advisor"
          subtitle="Tell us about your team and we'll get back to you within 24 hours."
        />

        {status === "success" ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 flex flex-col items-center text-center gap-3">
            <CheckCircle2 className="text-green-600" size={40} />
            <h3 className="font-bold text-lg text-slate-900">Thank you!</h3>
            <p className="text-slate-500">
              Your enquiry has been received. Our advisor will reach out shortly.
            </p>
            <Button variant="ghost" onClick={() => setStatus("idle")}>
              Submit another enquiry
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name *"
                className="border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Work Email *"
                className="border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your training needs"
              rows={4}
              className="border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />

            {status === "error" && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}

            <Button type="submit" className="self-start">
              {status === "loading" ? "Submitting..." : "Submit Enquiry"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
