"use client";

import type { NewsletterEmail } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { format } from "date-fns";
import { ConfirmationModal } from "./confirmation-modal";

type NewsletterTableProps = {
  emails: NewsletterEmail[];
};

export function NewsletterTable({ emails }: Readonly<NewsletterTableProps>) {
  return (
    <Table
      classNames={{
        wrapper:
          "bg-background border border-foreground/10 dark:bg-background/60 dark:data-[hover=true]:bg-background/80 backdrop-blur-md backdrop-saturate-150",
        th: "text-base",
        td: "text-base",
      }}
    >
      <TableHeader>
        <TableColumn>Email</TableColumn>
        <TableColumn>Submitted On</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {emails.map(({ id, email, date }) => (
          <TableRow key={id}>
            <TableCell>
              <h4 className="font-medium">{email}</h4>
            </TableCell>
            <TableCell>
              <h4 className="font-medium">{format(date, "PP")}</h4>
            </TableCell>
            <TableCell>
              <ConfirmationModal onConfirm={() => console.log(id)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
