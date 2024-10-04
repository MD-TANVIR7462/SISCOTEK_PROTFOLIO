import { ServiceTabs } from "./service-tabs";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";
import { MotionDiv } from "./motion-div";

export function Services() {
  return (
    <section id="services" className="scroll-mt-[4rem]">
      <SectionHeading>Discover Our Offerings</SectionHeading>
      <SectionSubheading>
        Experience our extensive services to help your business reach new
        heights
      </SectionSubheading>
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
          delay: 0.75,
        }}
        viewport={{
          once: true,
        }}
      >
        <ServiceTabs />
      </MotionDiv>
    </section>
  );
}
