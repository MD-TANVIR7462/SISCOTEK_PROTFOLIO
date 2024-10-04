"use client";

import { addNewPortfolioToDB } from "@/lib/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Fragment } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const newPortfolioForm = z.object({
  instagramURL: z
    .string()
    .url()
    .refine((val) => val.startsWith("https://www.instagram.com/"), {
      message: "Not a valid instagram URL",
    }),
});

type NewPortfolioForm = z.infer<typeof newPortfolioForm>;

export function NewPortfolioModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { control, handleSubmit, reset } = useForm<NewPortfolioForm>({
    resolver: zodResolver(newPortfolioForm),
    defaultValues: {
      instagramURL: "",
    },
  });

  const onSubmit = async (newPortfolio: NewPortfolioForm) => {
    try {
      await addNewPortfolioToDB(newPortfolio);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Button size="lg" color="primary" onPress={onOpen}>
        Add New Portfolio
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "bg-background/90 border border-foreground/10 backdrop-blur-md md:p-4 backdrop-saturate-150",
          body: "px-2",
        }}
      >
        <ModalContent>
          {(onClose: () => void) => (
            <Fragment>
              <ModalHeader className="flex flex-col gap-1">
                Add New Portfolio
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="instagramURL"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Input
                        size="lg"
                        label="Instagram Link"
                        placeholder="Enter a link"
                        errorMessage={fieldState.error?.message || ""}
                        isInvalid={fieldState.invalid}
                        {...field}
                        classNames={{
                          label: "text-base font-semibold",
                          inputWrapper: [
                            "bg-background",
                            "data-[hover=true]:bg-background/40",
                            "group-data-[focus=true]:bg-background/40",
                            "border border-foreground/20",
                          ],
                        }}
                      />
                    )}
                  />
                  <div className="flex items-center justify-end gap-x-2 pt-8">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" type="submit" onPress={onClose}>
                      Add Portfolio
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </Fragment>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
}
