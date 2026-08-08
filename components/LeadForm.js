"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";
import Button from "@/components/ui/Button";

const initialForm = {
  name: "",
  email: "",
  countryCode: "+91",
  phone: "",
  company: "",
  domain: "",
  candidates: "",
  deliveryMode: "",
  location: "",
};

const domains = ["Technology", "Data & AI", "Finance", "HR", "Sales & Marketing", "Other"];
const deliveryModes = ["Online", "Offline", "Hybrid"];

export default function LeadForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  
  useEffect(() => {
    const openModal = () => setIsOpen(true);
    window.addEventListener("open-lead-form", openModal);
    return () => window.removeEventListener("open-lead-form", openModal);
  }, []);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setStatus("idle");
    setErrorMessage("");
  };

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-2xl"
      >
        {/* Left image panel */}
        <div className="hidden sm:block sm:w-2/5 shrink-0">
          <img
            src="/contact.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right form panel */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Enquire Now</h3>
            <button
              onClick={handleClose}
              aria-label="Close"
              className="text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {status === "success" ? (
            <div className="flex flex-col items-center text-center gap-3 py-10">
              <CheckCircle2 className="text-green-600" size={40} />
              <h4 className="font-bold text-lg text-slate-900">Thank you!</h4>
              <p className="text-slate-500">
                Your enquiry has been received. Our advisor will reach out shortly.
              </p>
              <Button variant="ghost" onClick={handleClose}>
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <FormField
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Name"
                required
              />

              <FormField
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
              />

              {/* Phone with country code */}
              <div className="flex items-end gap-3 border-b border-slate-300 focus-within:border-blue-600 pb-2">
                <div className="flex items-center gap-1 text-slate-700 text-sm shrink-0">
                  <span>🇮🇳</span>
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className="bg-transparent focus:outline-none text-sm"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+971">+971</option>
                  </select>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="flex-1 bg-transparent focus:outline-none text-sm placeholder:text-slate-400"
                />
              </div>

              <FormField
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Enter company name"
              />

              <SelectField
                name="domain"
                value={form.domain}
                onChange={handleChange}
                placeholder="Select Domain"
                options={domains}
              />

              <FormField
                type="number"
                name="candidates"
                value={form.candidates}
                onChange={handleChange}
                placeholder="Enter No. of candidates"
              />

              <SelectField
                name="deliveryMode"
                value={form.deliveryMode}
                onChange={handleChange}
                placeholder="Select Mode of Delivery *"
                options={deliveryModes}
                required
              />

              <FormField
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Eg: Gurgaon, Delhi, India"
              />

              {status === "error" && (
                <p className="text-sm text-red-600">{errorMessage}</p>
              )}

              <Button type="submit" className="w-full justify-center">
                {status === "loading" ? "Submitting..." : "Submit"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function FormField({ type = "text", name, value, onChange, placeholder, required }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full border-b border-slate-300 focus:border-blue-600 focus:outline-none pb-2 text-sm placeholder:text-slate-400 bg-transparent transition-colors"
    />
  );
}

function SelectField({ name, value, onChange, placeholder, options, required }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full border-b border-slate-300 focus:border-blue-600 focus:outline-none pb-2 text-sm bg-transparent transition-colors ${
        value ? "text-slate-800" : "text-slate-400"
      }`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="text-slate-800">
          {opt}
        </option>
      ))}
    </select>
  );
}