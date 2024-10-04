"use client";

import { TPricingPackage } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Pencil, Trash2 } from "lucide-react";
import { PricingPackageForm } from "./pricing-package-form";

type PricingTableProp = {
  pricingPackages: TPricingPackage[];
};

export function PricingTable({ pricingPackages }: PricingTableProp) {
  return (
    <section>
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Pricing Packages
        </h2>
        <PricingPackageForm />
      </div>
      <Table
        hideHeader
        aria-label="Example static collection table"
        classNames={{
          th: "text-base",
          td: "text-base",
        }}
      >
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {pricingPackages.map(({ id, name }) => (
            <TableRow key={id}>
              <TableCell className="">
                <h4 className="font-medium">{name}</h4>
              </TableCell>
              <TableCell className="relative flex items-center gap-4">
                <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                  <Pencil />
                </span>
                <span className="cursor-pointer text-lg text-danger active:opacity-50">
                  <Trash2 />
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
