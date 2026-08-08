import { Headphones } from "lucide-react";
import Button from "@/components/ui/Button";
import { footer } from "@/data/siteData";

export default function CTABanner() {
  return (
    <section className="px-5 sm:px-8">
      <div className="max-w-7xl mx-auto bg-blue-600 rounded-3xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5 text-center sm:text-left">
          <div className="hidden sm:flex w-16 h-16 rounded-2xl border-2 border-white items-center justify-center shrink-0">
            <Headphones className="text-white" size={28} />
          </div>
          <div>
            <h3 className="text-white text-xl sm:text-2xl font-bold">{footer.ctaTitle}</h3>
            <p className="text-blue-100 mt-1">{footer.ctaSubtitle}</p>
          </div>
        </div>
        <Button href="#lead-form" variant="outline" className="shrink-0">
          {footer.ctaButton}
        </Button>
      </div>
    </section>
  );
}
