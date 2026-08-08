import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { howItWorks } from "@/data/siteData";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 sm:px-8 py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={howItWorks.title}
          highlight={howItWorks.titleHighlight}
          subtitle={howItWorks.subtitle}
          subtitleHighlight={howItWorks.subtitleHighlight}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.steps.map((step, index) => (
            <div key={step.title} className="bg-white rounded-2xl border border-slate-200 p-6 text-center flex flex-col items-center gap-3">
              <span className="text-xs font-bold text-blue-600">STEP 0{index + 1}</span>
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <Icon name={step.icon} size={26} />
              </div>
              <h4 className="font-bold text-slate-900">{step.title}</h4>
              <p className="text-sm text-slate-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
