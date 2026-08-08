import DeliverResults from "@/components/cat/DeliverResults";
import CATFramework from "@/components/cat/CATFramework";

export default function CAT() {
  return (
    <section id="cat" className="px-5 sm:px-8 py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <CATFramework />
        <DeliverResults />
      </div>
    </section>
  );
}
