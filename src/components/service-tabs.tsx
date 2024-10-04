"use client";

import { ServiceCard } from "@/components/service-card";
import { services } from "@/config/services";
import { Tab, Tabs } from "@nextui-org/tabs";

export function ServiceTabs() {
  return (
    <Tabs
      aria-label="services"
      color="primary"
      size="lg"
      radius="md"
      fullWidth
      classNames={{
        tabList: [
          "border border-foreground/10",
          "bg-background/60",
          "backdrop-blur-md",
          "backdrop-saturate-150",
          "overflow-x-scroll w-[calc(100dvw-1rem)] mx-auto",
          "md:w-full md:justify-between",
          "mb-2",
        ],
        tab: "max-w-fit h-10 px-2 md:h-11 md:px-3 scroll-mx-[5rem]",
        tabContent: "group-data-[selected=true]:text-white",
      }}
    >
      {services.map(({ category, Icon, services }) => (
        <Tab
          key={category}
          title={
            <div className="flex items-center space-x-1.5">
              <Icon className="h-5 w-5" />
              <span>{category}</span>
            </div>
          }
        >
          <div className="gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3">
            {services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </Tab>
      ))}
    </Tabs>
  );
}
