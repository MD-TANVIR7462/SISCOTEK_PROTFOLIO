"use client";

import { addNewsletterEmail } from "@/lib/services";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import * as z from "zod";

const emailSchema = z.string().email();

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const validationResult = emailSchema.safeParse(email);

      if (!validationResult.success) {
        return toast.error("Please enter a valid email");
      }

      await addNewsletterEmail({ email, date: new Date().toString() });
      toast.success("Yay, subscribed");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      className="lg:items-scenter flex flex-col gap-4 sm:flex-row sm:gap-2"
      onSubmit={handleSubmit}
    >
      <Input
        startContent={<Mail />}
        placeholder="example@email.com"
        classNames={{
          inputWrapper:
            "bg-background/40 border border-foreground/20 data-[hover=true]:bg-background/60 group-data-[focus=true]:bg-background/60 h-14",
          input: [
            "placeholder:text-foreground/60 focus-visible:outline-none",
            "data-[has-start-content=true]:ps-1.5",
            "data-[has-end-content=true]:pe-1.5",
          ],
        }}
        value={email}
        onChange={(e) => setEmail(e.target.value.trim())}
      />
      <Button
        type="submit"
        size="lg"
        color="primary"
        className="text-base sm:h-auto"
      >
        Subscribe
      </Button>
    </form>
  );
}
