import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { clients } from "@/data/siteData";

export default function Clients() {
  return (
    <section>
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Our Clients"
          subtitle="Trusted by leading organizations"
        />

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clients.map((client) => (
            <div
              key={client.text}
              className="flex items-center justify-center transition-opacity hover:opacity-70"
            >
              <Image
                src={client.image}
                alt={client.text}
                width={120}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}