export const dynamic = "force-dynamic";

import { ConfirmationModal } from "@/components/confirmation-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { deleteConsultationById, getAllConsultations } from "@/lib/services";
import type { TConsultation } from "@/types";
import { Card } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { format } from "date-fns";
import { Calendar, Clock, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultations Panel | thrivenvision",
  description:
    "Access all client bookings for free consultations on our Consultations page.",
};

export default async function Consultations() {
  const consultations = await getAllConsultations();

  return (
    <section>
      <SectionHeading>Consultations</SectionHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {consultations.map((consultation) => (
          <ConsultationCard key={consultation.id} {...consultation} />
        ))}
      </div>
    </section>
  );
}

function ConsultationCard({
  id,
  email,
  fullName,
  phoneNo,
  message,
  consultType,
  preferedDate,
  preferedTimeSlot,
}: Readonly<TConsultation>) {
  const details = [
    {
      Icon: Mail,
      value: email,
    },
    {
      Icon: Phone,
      value: phoneNo,
    },
    {
      Icon: Calendar,
      value: format(new Date(preferedDate), "PP"),
    },
    {
      Icon: Clock,
      value: preferedTimeSlot,
    },
  ];

  return (
    <Card
      isBlurred
      classNames={{
        base: [
          "dark:bg-background/60",
          "backdrop-blur-md",
          "backdrop-saturate-150",
          "p-6 border text-foreground/80 border-foreground/10",
          "flex flex-col gap-5",
        ],
      }}
    >
      <div className="space-y-1">
        <h3 className="text-lg font-medium text-foreground">{fullName}</h3>
        <p className="leading-relaxed">{message}</p>
        <Chip size="sm" color="primary" variant="dot">
          {consultType}
        </Chip>
      </div>
      <div className="space-y-2">
        {details.map(({ value, Icon }) => (
          <div key={value} className="flex items-center gap-x-2.5">
            <Icon className="h-4 w-4" />
            <span>{value}</span>
          </div>
        ))}
      </div>
      <ConfirmationModal
        onConfirm={async () => {
          "use server";
          deleteConsultationById(id as string);
        }}
      />
    </Card>
  );
}
