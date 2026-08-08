import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { deliverResults } from "@/data/siteData";

export default function DeliverResults() {
  return (
    <div>
      <SectionHeading
        title={deliverResults.title}
        highlight={deliverResults.titleHighlight}
        subtitle={deliverResults.subtitle}
        subtitleHighlight="Skill Development"
      />

      <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
        {deliverResults.steps.map((step) => (
          <div key={step.number} className="relative flex items-center">
            {/* Left bar - outside the card, taller, rounded caps */}
            <span className="hidden sm:block -ml-3 w-1.5 h-[85%] rounded-full bg-blue-600 shrink-0" />

            {/* Card */}
            <div className="relative flex-1 bg-blue-50 rounded-3xl px-6 pt-10 pb-8 flex flex-col items-center text-center">
              {/* Number badge - overlaps top edge only */}
              <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-white border-2 border-blue-200 text-slate-900 font-bold text-sm flex items-center justify-center">
                {step.number}
              </span>

              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4">
                <Icon name={step.icon} size={26} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2 text-lg">{step.title}</h4>
              <p className="text-sm text-slate-500 max-w-[220px]">{step.description}</p>
            </div>

            {/* Right bar - outside the card, taller, rounded caps */}
            <span className="hidden sm:block -mr-3 w-1.5 h-[85%] rounded-full bg-blue-600 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}