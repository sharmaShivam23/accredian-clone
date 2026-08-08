import { Facebook, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import Button from "@/components/ui/Button";
import { footer } from "@/data/siteData";

// Maps the social platform name (string, from siteData) to its lucide icon
const socialIcons = {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
};

export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Logo + socials + enquire */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <div className="flex flex-col leading-none mb-3">
              <span className="text-2xl font-bold text-blue-600">accredian</span>
              <span className="text-[11px] tracking-wide text-slate-500">
                credentials that matter
              </span>
            </div>
            <div className="flex items-center gap-3">
              {footer.social.map((name) => {
                const SocialIcon = socialIcons[name];
                if (!SocialIcon) return null;
                return (
                  <a
                    key={name}
                    href="#"
                    aria-label={name}
                    className="w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <SocialIcon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-center sm:text-right">
            <Button href="#lead-form">Enquire Now</Button>
            <p className="text-xs text-slate-500 mt-2">Speak with our Advisor</p>
          </div>
        </div>

        <hr className="border-slate-200 mb-10" />

        {/* Link columns */}
        <div className="grid sm:grid-cols-2 gap-10 mb-10">
          <div>
            <h4 className="font-bold text-slate-900 mb-4">{footer.columns.company.title}</h4>
            <ul className="flex flex-col gap-2">
              {footer.columns.company.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-500 hover:text-blue-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">{footer.columns.contact.title}</h4>
            <p className="text-sm text-slate-500 mb-2">
              Email us:{" "}
              <a href={`mailto:${footer.columns.contact.email}`} className="text-blue-600">
                {footer.columns.contact.email}
              </a>
            </p>
            <p className="text-sm text-slate-500">
              Office Address: {footer.columns.contact.address}
            </p>
          </div>
        </div>

        <hr className="border-slate-200 mb-6" />

        <p className="text-center text-xs text-slate-400">{footer.copyright}</p>
      </div>
    </footer>
  );
}
