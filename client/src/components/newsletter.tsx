import { Card } from "@nextui-org/card";
import Image from "next/image";
import { NewsletterForm } from "./newsletter-form";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";
import { MotionDiv } from "./motion-div";

export function Newsletter() {
  return (
    <MotionDiv
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.75,
      }}
      viewport={{
        once: true,
      }}
    >
      <Card
        isBlurred
        classNames={{
          base: [
            "dark:bg-background/60",
            "backdrop-blur-md",
            "backdrop-saturate-150",
            "border border-foreground/10",
            "gap-6 p-2 items-start !-mb-[14rem] relative z-50 lg:flex-row lg:items-center",
          ],
        }}
      >
        <Image
          src="/images/newsletter.webp"
          alt="newsletter image"
          quality={95}
          height={500}
          width={500}
          className="h-full w-full rounded-2xl object-cover object-center lg:w-[32rem]"
        />
        <div className="space-y-2 p-2">
          <SectionHeading className="text-start">
            <span className="lg:text-4xl">Stay Ahead of the Curve </span>
            <br className="hidden lg:block" />
            Join Our Exclusive Newsletter!
          </SectionHeading>
          <SectionSubheading className="mx-0 max-w-full px-0 text-start">
            Dive into the latest trends, insights, and tips in the digital world
            with <span className="font-semibold">thrivenvision&apos;s </span>
            newsletter. Signing up is quick and easy! Just enter your email
            below, and let us bring the future of digital innovation straight to
            you.
          </SectionSubheading>
          <NewsletterForm />
          <p className="pt-10 leading-relaxed text-foreground/60">
            Your privacy is paramount to us. We promise to keep your email safe
            and never spam. Unsubscribe at any time with just a click.
          </p>
        </div>
      </Card>
    </MotionDiv>
  );
}
