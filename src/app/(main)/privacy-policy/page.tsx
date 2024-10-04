import { SectionHeading } from "@/components/ui/section-heading";
import { privacyPolicy } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | thrivenvision",
  description:
    "Your privacy matters! Understand how thrivenvision protects your data. Learn more in our Privacy Policy.",
};

export default function PrivacyPolicy() {
  return (
    <section className="container relative z-10 mx-auto max-w-5xl scroll-m-20 px-4 pt-[max(3dvw,1.5rem)]">
      <SectionHeading className="text-start">Privacy Policy</SectionHeading>
      <p className="pb-14 text-[1.25rem] leading-relaxed text-foreground/80">
        At <span className="font-semibold">thrivenvision</span>, we are
        committed to safeguarding the privacy and security of the personal
        information of our clients and website visitors. This Privacy Policy
        describes how we collect, use, and protect the personal information you
        provide to us when you use our website and services.
      </p>
      <div className="space-y-8 text-[1.25rem] leading-relaxed text-foreground/80">
        {privacyPolicy.map(({ privacy, description }) => (
          <p key={privacy} className="">
            <span className="font-semibold text-primary">{privacy}</span> -{" "}
            {description}
          </p>
        ))}
      </div>
      <p className="pt-14 text-[1.25rem] leading-relaxed text-foreground/80">
        Thank you for choosing{" "}
        <span className="font-semibold">thrivenvision</span>. Your privacy is
        important to us, and we are committed to protecting the personal
        information you share with us.
      </p>
    </section>
  );
}
