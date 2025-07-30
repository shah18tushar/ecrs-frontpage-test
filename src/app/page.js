import Hero from "../components/Hero";
import CarPackages from "@/components/CarPackages";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PartnerWithUs from "@/components/PartnerWithUs";
import CallToAction from "@/components/CallToAction";
import BookingForm from "../components/BookingForm";
import Achievements from "@/components/achievements";
import Accordion_Info from "@/components/Accordion_Info";
import Testimonials from "@/components/Testimonials";

export default function Frontpage() {
  return (
    <div className="overflow-x-hidden">
      {/* Add spacing below Hero */}
      <div className="">
        <Hero />
      </div>

      <div className="">
        <section className="">
          <FeaturesSection />
        </section>

        <section className="">
          <CarPackages />
        </section>

        {/* This is our video parallax component */}
        <section className="">
          <BookingForm />
        </section>

        <section className="">
          <PartnerWithUs />
        </section>

        <section className="py-0 pb-0">
          <Achievements />
        </section>

        <section className="">
          <WhyChooseUs />
        </section>

        <section className="">
          <CallToAction />
        </section>

        <section className="">
          <Testimonials />
        </section>

        <section className="py-0 pb-0">
          <Accordion_Info />
        </section>

      </div>
    </div>
  );
}