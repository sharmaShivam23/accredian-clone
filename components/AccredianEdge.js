import WhoShouldJoin from "@/components/edge/WhoShouldJoin";
import CourseSegmentation from "@/components/edge/CourseSegmentation";
import DomainExpertise from "@/components/edge/DomainExpertise";
import KeyAspects from "@/components/edge/KeyAspects";

export default function AccredianEdge() {
  return (
    <section id="accredian-edge" className="px-5 sm:px-8 py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        <KeyAspects />
        <DomainExpertise />
        <CourseSegmentation />
        <WhoShouldJoin />
      </div>
    </section>
  );
}
