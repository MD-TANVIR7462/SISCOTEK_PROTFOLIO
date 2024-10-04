import { PricingPackageCard } from "@/components/pricing-package-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";
import { pricingPackages } from "@/config";
import { MotionDiv } from "./motion-div";

export async function PricingPackages() {
  return (
    <section id="packages" className="scroll-mt-[4rem]">
      <SectionHeading>Our Packages</SectionHeading>
      <SectionSubheading>
        Explore our customizable packages for your specific needs
      </SectionSubheading>
      <div className="flex flex-wrap place-content-center gap-6">
        {pricingPackages?.map((pricingPackage, i) => (
          <MotionDiv
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.75,
              delay: 0.125 * (i + 1),
            }}
            viewport={{
              once: true,
            }}
            key={pricingPackage.name}
          >
            <PricingPackageCard {...pricingPackage} />
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
