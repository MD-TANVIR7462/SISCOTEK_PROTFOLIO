import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";
import { employees } from "@/config";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | thrivenvision",
  description:
    "Meet the thrivenvision team! We bring your digital vision to life. Discover our services and values.",
};

export default function AboutUs() {
  return (
    <section className="container relative z-10 mx-auto max-w-6xl scroll-m-20 space-y-[min(4rem,15dvw)] px-4 pt-[max(3dvw,1.5rem)]">
      <div>
        <SectionHeading className="text-start">About us</SectionHeading>
        <p className="text-[1.25rem] leading-relaxed text-foreground/80">
          <span className="font-semibold">thrivenvision</span> distinguishes
          itself as more than a digital agency by employing innovators, creators
          and strategists who are committed to propelling your brand forward in
          the digital era. With a founding principle of flourishing and
          imagining the extraordinary, our organization provides a range of
          services tailored to enhance the online visibility and interaction of
          your brand.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card
          isBlurred
          classNames={{
            base: [
              "dark:bg-background/60",
              "backdrop-blur-md",
              "backdrop-saturate-150",
              "border border-foreground/10 p-4",
            ],
          }}
        >
          <CardHeader className="pb-2">
            <h3 className="text-3xl font-bold tracking-tight">Our Vision</h3>
          </CardHeader>
          <CardBody>
            <p className="text-[1.25rem] leading-relaxed text-foreground/80">
              To be the game-changer in the industry, igniting brand stories
              that inspire, engage and connect with people on a deeper level.
            </p>
          </CardBody>
        </Card>
        <Card
          isBlurred
          classNames={{
            base: [
              "dark:bg-background/60",
              "backdrop-blur-md",
              "backdrop-saturate-150",
              "border border-foreground/10 p-4",
            ],
          }}
        >
          <CardHeader className="pb-2">
            <h3 className="text-3xl font-bold tracking-tight">Our Mission</h3>
          </CardHeader>
          <CardBody>
            <p className="text-[1.25rem] leading-relaxed text-foreground/80">
              To thrive in the digital world by leveraging innovative
              strategies, data-driven insights, and cutting-edge technologies to
              drive growth, engagement, and brand success by delivering
              measurable results and exceeding client expectations.
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="space-y-6 text-[1.25rem] leading-relaxed text-foreground/80">
        <p>
          <span className="font-semibold">thrivenvision</span> streamlines your
          digital projects, transforming them from concept to reality swiftly
          and efficiently. Our simplified submission process means your project
          starts in minutes, not days. With our expert team, expect rapid
          turnarounds without sacrificing quality—outperforming traditional
          freelance rates thanks to our extensive network and operational
          efficiencies.
        </p>
        <p>
          We specialize in a wide range of digital services, including SEO,
          branding, website design, video editing, and animation, all tailored
          to boost your online presence. Our approach is not just about
          delivering projects but ensuring they resonate with your audience,
          leveraging the latest trends and techniques.
        </p>
        <p>
          Choose <span className="font-semibold">thrivenvision </span>for
          competitive pricing, fast delivery, and quality that elevates your
          brand above the rest. Partner with us to enhance your digital
          footprint efficiently and make your brand stand out in the digital
          landscape.
        </p>
      </div>
      <div className="pt-6">
        <SectionHeading>Meet the force behind the magic</SectionHeading>
        <SectionSubheading className="max-w-full pb-8">
          Passionate professionals collaborate to provide unique solutions that
          exceed customer expectations
        </SectionSubheading>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {employees.map((employee) => (
            <Employee key={employee.name} {...employee} />
          ))}
        </div>
      </div>
    </section>
  );
}

type EmployeeProps = (typeof employees)[number];

function Employee({ name, image, position }: EmployeeProps) {
  return (
    <Card
      isBlurred
      classNames={{
        base: [
          "dark:bg-background/60",
          "backdrop-blur-md",
          "backdrop-saturate-150",
          "border border-foreground/10 p-6",
        ],
      }}
    >
      <CardBody className="flex items-center justify-center space-y-1 text-center text-[1.25rem]">
        <Image
          src={image}
          alt={name}
          height={200}
          width={200}
          className="w-full object-cover object-center"
        />
        <h3 className="pt-8 font-semibold">{name}</h3>
        <h4 className="text-foreground/80">{position}</h4>
      </CardBody>
    </Card>
  );
}
