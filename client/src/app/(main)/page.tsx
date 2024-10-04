export const dynamic = "force-dynamic";

import { Hero } from "@/components/hero";
import { MotionDiv } from "@/components/motion-div";
import { Newsletter } from "@/components/newsletter";
// import { Portfolios } from "@/components/portfolios";
// import { PricingPackages } from "@/components/pricing-packages";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { TrustedCompanies } from "@/components/trusted-companies";
import { WhyChooseUs } from "@/components/why-choose-us";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="container relative z-20 mx-auto space-y-[min(10rem,25dvw)] px-2 sm:px-4">
      <Hero />
      <Services />
      {/* <PricingPackages /> */}
      <WhyChooseUs />
      <TrustedCompanies />
      {/* <Portfolios /> */}
      <Testimonials />
      <Newsletter />
      <MotionDiv
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        viewport={{
          once: true,
        }}
        className="absolute -top-[4dvw] right-0 hidden lg:block"
      >
        <Image
          className="object-fit h-[30rem] w-[37.5rem] object-center opacity-30"
          src={"/images/hero-bg-logo.webp"}
          alt="hero bg image"
          height="300"
          width="300"
          quality={95}
          priority
        />
      </MotionDiv>
    </main>
  );
}
