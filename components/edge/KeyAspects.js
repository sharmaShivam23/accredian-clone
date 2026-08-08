import SectionHeading from "@/components/ui/SectionHeading";
import { keyAspects } from "@/data/siteData";

export default function KeyAspects() {
  return (
    <div>
      <SectionHeading
        title={keyAspects.title}
        highlight={keyAspects.titleHighlight}
        subtitle={keyAspects.subtitle}
        subtitleHighlight="Our Strategic Training"
      />

      <div className="mt-12 w-full overflow-x-auto">
        <img
          src="/edge.svg"
          alt="The Accredian Edge - Key Aspects of Our Strategic Training"
          className="w-full min-w-[900px] max-w-6xl mx-auto"
        />
      </div>
    </div>
  );
}