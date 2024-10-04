import { trustedCompanines } from "@/config";
import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-div";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";
import { TrustedCompaniesSlider } from "./trusted-companies-slider";

export async function TrustedCompanies() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <div className="order-last flex flex-col items-start lg:order-first">
        <SectionHeading className="text-start">
          Partnering with
          <br />
          Industry Leaders
        </SectionHeading>
        <SectionSubheading className="mx-0 max-w-[30rem] px-0 pb-8 text-start">
          Our agency is a hub for elite partnerships, trusted by over a hundred
          leading brands to deliver impactful and innovative collaborations.
          Discover the synergy of creativity and strategy in our portfolio of
          successful projects.
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
          <Link href="/contact-us">
            <Button
              color="primary"
              endContent={<ChevronRight />}
              className="gradient-btn font-semibold lg:h-12 lg:px-5 lg:text-lg"
            >
              <span>Lets Connect</span>
            </Button>
          </Link>
        </MotionDiv>
      </div>
      <div className="hidden grid-cols-3 gap-8 px-2 lg:grid lg:gap-4 lg:px-0">
        {trustedCompanines?.map((company, i) => (
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
            key={company}
          >
            <div className="flex place-content-center rounded-xl border border-foreground/10 bg-background/60 p-6 backdrop-blur-md backdrop-saturate-150">
              <Image
                src={company}
                alt="trusted company"
                height={80}
                width={200}
                className="object-fit object-center"
                quality={95}
              />
            </div>
          </MotionDiv>
        ))}
      </div>
      <TrustedCompaniesSlider />
    </section>
  );
}
