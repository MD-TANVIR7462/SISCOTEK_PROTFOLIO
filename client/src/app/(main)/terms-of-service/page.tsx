import { SectionHeading } from "@/components/ui/section-heading";
import { termsOfServices } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | thrivenvision",
  description:
    "Digital experience secured. Learn about responsible use and user agreements for a secure thrivenvision experience.",
};

export default function TermsOfServices() {
  return (
    <section className="container relative z-10 mx-auto max-w-5xl scroll-m-20 px-4 pt-[max(3dvw,1.5rem)]">
      <SectionHeading className="text-start normal-case">
        Terms of Service
      </SectionHeading>
      <p className="text-foregournd/80 pb-14 text-[1.25rem]">
        By accessing and using the services provided by{" "}
        <span className="font-bold">thrivenvision</span>, you agree to the
        following terms and conditions:
      </p>
      <div className="space-y-8">
        {termsOfServices.map((termOfServices) => (
          <TermOfService key={termOfServices.term} {...termOfServices} />
        ))}
      </div>
    </section>
  );
}

type TermOfServiceProps = (typeof termsOfServices)[number];

function TermOfService({ term, description }: TermOfServiceProps) {
  return (
    <p className="text-[1.25rem] leading-relaxed text-foreground/80">
      <span className="font-semibold text-primary">{term}</span> - {description}
    </p>
  );
}
