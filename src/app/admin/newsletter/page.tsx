export const dynamic = "force-dynamic";

import { NewsletterTable } from "@/components/wewsletter-table";
import { getAllNewsletterEmails } from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter Panel | thrivenvision",
  description:
    "Efficiently manage and access client email submissions on our Newsletter page.",
};

export default async function Newsletter() {
  const newsletterEmails = await getAllNewsletterEmails();

  return (
    <section>
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-2xl font-semibold tracking-tight">Newsletters</h2>
      </div>
      <NewsletterTable emails={newsletterEmails} />
    </section>
  );
}
