import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { domainExpertise } from "@/data/siteData";

export default function DomainExpertise() {
  return (
    <section
      id="accredian-edge"
      className="bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto w-full max-w-[1000px] px-6 sm:px-8">

        {/* Section Heading */}
        <div className="text-center">
          <h2
            className="
              text-[38px]
              font-bold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#0F172A]
              sm:text-[42px]
            "
          >
            Our{" "}
            <span className="text-[#2867E8]">
              Domain Expertise
            </span>
          </h2>

          <p
            className="
              mt-4
              text-[18px]
              font-medium
              leading-relaxed
              text-[#17324D]
              sm:text-[20px]
            "
          >
            <span className="text-[#2867E8]">
              Specialized Programs
            </span>{" "}
            Designed to Fuel Innovation
          </p>
        </div>

        {/* Domain Cards */}
        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-[960px]
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {domainExpertise.domains.map((domain) => (
            <div
              key={domain.title}
              className="
                flex
                h-[132px]
                flex-col
                items-center
                justify-center
                rounded-[15px]
                border
                border-[#E1E5EA]
                bg-white
                px-5
                py-5
                text-center
                shadow-[0_8px_18px_rgba(15,23,42,0.09)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_25px_rgba(15,23,42,0.13)]
              "
            >
              {/* Icon */}
              <div className="mb-3 flex h-[58px] items-center justify-center">
                <Icon
                  name={domain.icon}
                  size={54}
                  className="text-[#2867E8]"
                />
              </div>

              {/* Title */}
              <h4
                className="
                  text-[20px]
                  font-bold
                  leading-[1.2]
                  tracking-[-0.02em]
                  text-[#0F172A]
                "
              >
                {domain.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Last centered card */}
        {domainExpertise.domains.length % 3 !== 0 && (
          <div className="hidden lg:block" />
        )}

      </div>
    </section>
  );
}