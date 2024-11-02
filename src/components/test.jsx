"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { addNewTestimonialToDB } from "@/lib/services";
import { uploadFile } from "@/lib/upload-file";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Camera } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const testimonialFormSchema = z.object({
  comment: z
    .string()
    .trim()
    .min(5, { message: "Comment must be at least 5 characters." })
    .max(500, { message: "Comment cannot exceed 200 characters." }),
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(20, { message: "Name cannot exceed 20 characters." })
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "Name must only include alphanumeric characters.",
    }),
  handle: z
    .string()
    .trim()
    .min(3, { message: "Handle must be at least 3 characters." })
    .max(20, { message: "Handle cannot exceed 20 characters." })
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "Handle must only include alphanumeric characters.",
    }),
});

type TestimonialForm = z.infer<typeof testimonialFormSchema>;

export function TestimonialForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pictureFile, setPictureFile] = useState<File | null>(null);

  const { control, handleSubmit, reset } = useForm<TestimonialForm>({
    resolver: zodResolver(testimonialFormSchema),
    defaultValues: {
      name: "",
      comment: "",
      handle: "",
    },
  });

  const onSubmit = async ({ name, comment, handle }: TestimonialForm) => {
    try {
      setIsSubmitting(true);

      if (!pictureFile) {
        return console.log("please add a picture");
      }

      const pictureURL = await uploadFile(pictureFile);

      const newTestimonial = {
        comment,
        starRating: 0,
        customer: {
          name,
          handle,
          picture: pictureURL,
        },
      };

      await addNewTestimonialToDB(newTestimonial);
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
      <SectionHeading>Add New Price Package</SectionHeading>
      <div className="relative w-max">
        <input
          id="picture"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) =>
            setPictureFile(e.target.files ? e.target.files[0] : null)
          }
        />
        <label
          htmlFor="picture"
          className="rounded-inherit absolute inset-0 z-10 cursor-pointer 
          appearance-none bg-transparent"
        />
        <Avatar
          showFallback
          radius="lg"
          src={pictureFile ? URL.createObjectURL(pictureFile) : ""}
          fallback={<Camera className="h-8 w-8" />}
          className="h-20 w-20"
        />
      </div>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            size="lg"
            labelPlacement="outside"
            label="Customer Name"
            placeholder="Enter customer name"
            errorMessage={fieldState.error?.message || ""}
            isInvalid={fieldState.invalid}
            {...field}
          />
        )}
      />
      <Controller
        name="comment"
        control={control}
        render={({ field, fieldState }) => (
          <Textarea
            size="lg"
            minRows={6}
            labelPlacement="outside"
            label="Customer comment"
            placeholder="Enter customer comment"
            errorMessage={fieldState.error?.message || ""}
            isInvalid={fieldState.invalid}
            {...field}
          />
        )}
      />
      <Controller
        name="handle"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-small text-default-400">@</span>
              </div>
            }
            size="lg"
            labelPlacement="outside"
            label="Customer handle"
            placeholder="Enter customer handle"
            errorMessage={fieldState.error?.message || ""}
            isInvalid={fieldState.invalid}
            {...field}
          />
        )}
      />
      <div className="flex items-center justify-end gap-x-2">
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
