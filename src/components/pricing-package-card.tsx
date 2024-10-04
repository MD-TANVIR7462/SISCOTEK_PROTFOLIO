import { TPricingPackage } from "@/types";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Check } from "lucide-react";
import Link from "next/link";

export function PricingPackageCard({
  name,
  services,
  features,
}: TPricingPackage) {
  const servicesAndFeaturesList = {
    "Services Included": services,
    Features: features,
  };

  return (
    <Card
      isBlurred
      classNames={{
        base: [
          "dark:bg-background/60",
          "dark:data-[hover=true]:bg-background/80",
          "backdrop-blur-md",
          "backdrop-saturate-150",
          "w-[23rem] h-full p-4 md:p-6 border border-foreground/10",
        ],
      }}
    >
      <CardHeader>
        <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
      </CardHeader>
      <CardBody className="space-y-6">
        {Object.keys(servicesAndFeaturesList).map((key) => (
          <div key={key}>
            <h4 className="pb-2 text-sm font-medium text-foreground/80">
              {key}
            </h4>
            <ul className="space-y-2 leading-relaxed text-foreground/60">
              {servicesAndFeaturesList[
                key as keyof typeof servicesAndFeaturesList
              ].map((service) => (
                <li key={service} className="flex items-center gap-x-2">
                  <Check className="h-4 w-4 min-w-4 text-primary" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardBody>
      <CardFooter>
        <Link className="w-full" href="/get-quote">
          <Button
            color="primary"
            variant="solid"
            fullWidth
            size="lg"
            className="gradient-btn-wide mt-2 text-base font-semibold"
          >
            <span>Get a Quote</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
