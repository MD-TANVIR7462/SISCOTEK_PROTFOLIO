"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { addNewPortfolioToDB } from "@/lib/services";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const portfolioFormSchema = z.object({
  portfolio: z
    .string()
    .trim()
    .min(5, { message: "Comment must be at least 5 characters." })
    .max(500, { message: "Comment cannot exceed 200 characters." }),
});

type PortfolioForm = z.infer<typeof portfolioFormSchema>;

export function PortfolioForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      portfolio: "",
    },
  });

  const onSubmit = async ({ portfolio }: PortfolioForm) => {
    try {
      setIsSubmitting(true);

      const newPortfolio = {
        instagramURL: portfolio,
      };
      await addNewPortfolioToDB(newPortfolio);

      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="mx-auto flex max-w-[40rem] flex-col gap-8 py-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <SectionHeading>Add Your Portfolio</SectionHeading>
      <Controller
        name="portfolio"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            size="lg"
            labelPlacement="outside"
            label="portfolio link"
            placeholder="Enter your portfolio Link"
            errorMessage={fieldState.error?.message || ""}
            isInvalid={fieldState.invalid}
            {...field}
          />
        )}
      />

      <div className="flex items-center justify-start gap-x-2">
        <Button
          type="button"
          color="danger"
          onClick={() => {
            reset();
          }}
        >
          Clear
        </Button>
        <Button type="submit" color="primary" isLoading={isSubmitting}>
          Submit
        </Button>
      </div>
    </form>
  );
}
