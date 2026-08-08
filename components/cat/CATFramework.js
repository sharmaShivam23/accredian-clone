import SectionHeading from "@/components/ui/SectionHeading";
import { catFramework } from "@/data/siteData";

export default function CATFramework() {
  return (
    <div className="bg-blue-50 rounded-3xl p-8 sm:p-12">
      <SectionHeading
        title={catFramework.title}
        highlight={catFramework.titleHighlight}
        subtitle={catFramework.subtitle}
        subtitleHighlight="Learning Excellence"
      />

      <div className="mt-10 w-full max-w-4xl mx-auto">
        <img
          src="/catV2.svg"
          alt={catFramework.title}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}