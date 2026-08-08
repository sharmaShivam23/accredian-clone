import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { whoShouldJoin } from "@/data/siteData";

export default function WhoShouldJoin() {
  return (
    <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-white grid lg:grid-cols-[1fr_1.4fr] gap-10 items-center">
      {/* Left: title + image */}
      <div>
        <p className="text-blue-100 font-medium mb-2">{whoShouldJoin.eyebrow}</p>
        <h3 className="text-3xl sm:text-4xl font-bold mb-6">{whoShouldJoin.title}</h3>
        <div className="relative w-full h-64 rounded-xl overflow-hidden hidden sm:block">
          <Image
            src={whoShouldJoin.image}
            alt="Professionals reviewing learning progress"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right: 2x2 audience grid */}
      <div className="grid sm:grid-cols-2 gap-8">
        {whoShouldJoin.audiences.map((item) => (
          <div key={item.title}>
            <div className="w-12 h-12 rounded-lg border-2 border-white flex items-center justify-center mb-4">
              <Icon name={item.icon} size={24} />
            </div>
            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
            <p className="text-blue-100 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
