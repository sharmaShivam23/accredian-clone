import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import AccredianEdge from "@/components/AccredianEdge";
import CAT from "@/components/CAT";
import HowItWorks from "@/components/HowItWorks";
import FAQs from "@/components/FAQs";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

// Home page — simply stacks every section in order.
// Each section is its own component/file (see /components) so the page
// itself stays short and easy to re-order or extend.
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <CAT />
        {/* <HowItWorks /> */}
        <FAQs />
        <Testimonials />
        {/* <LeadForm /> */}
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
