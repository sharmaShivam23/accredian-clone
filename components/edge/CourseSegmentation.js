import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { courseSegmentation } from "@/data/siteData";

export default function CourseSegmentation() {
  return (
    <div>
      <SectionHeading
        title={courseSegmentation.title}
        highlight={courseSegmentation.titleHighlight}
        subtitle={courseSegmentation.subtitle}
        subtitleHighlight="Custom-fit Courses"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courseSegmentation.cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-40">
              <Image src={card.image} alt={card.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-blue-600 text-lg mb-2">{card.title}</h4>
              <p className="text-sm text-slate-500">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
