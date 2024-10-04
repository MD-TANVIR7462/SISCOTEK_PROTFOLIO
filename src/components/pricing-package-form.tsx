"use client";

import { addNewPricingPackageToDB } from "@/lib/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";

import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const keyPointSchema = z
  .literal("")
  .or(
    z
      .string()
      .trim()
      .min(5, { message: "Point must be at least 3 characters." })
      .max(100, { message: "Point must be at least 3 characters." }),
  );

const pricingPackageFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(50, { message: "Name cannot exceed 20 characters." })
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "Name must only include alphanumeric characters.",
    }),
  service1: keyPointSchema,
  service2: keyPointSchema,
  service3: keyPointSchema,
  service4: keyPointSchema,
  service5: keyPointSchema,
  feature1: keyPointSchema,
  feature2: keyPointSchema,
  feature3: keyPointSchema,
  feature4: keyPointSchema,
  feature5: keyPointSchema,
});

type Services = "service1" | "service2" | "service3" | "service4" | "service5";
type Features = "feature1" | "feature2" | "feature3" | "feature4" | "feature5";

type PricingPackageForm = z.infer<typeof pricingPackageFormSchema>;

export function PricingPackageForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceCount, setServiceCount] = useState([null, null]);
  const [featuresCount, setFeaturesCount] = useState([null, null]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { control, handleSubmit, setValue, reset } =
    useForm<PricingPackageForm>({
      resolver: zodResolver(pricingPackageFormSchema),
      defaultValues: {
        name: "",
        service1: "",
        service2: "",
        service3: "",
        service4: "",
        service5: "",
        feature1: "",
        feature2: "",
        feature3: "",
        feature4: "",
        feature5: "",
      },
    });

  const onSubmit = async ({ name, ...data }: PricingPackageForm) => {
    try {
      setIsSubmitting(true);

      const newPricingPackage = {
        name,
        services: Object.keys(data)
          .filter((key) => key.startsWith("service"))
          .map((key) => data[key as keyof typeof data])
          .filter((service) => (service as string).length > 0),
        features: Object.keys(data)
          .filter((key) => key.startsWith("feature"))
          .map((key) => data[key as keyof typeof data])
          .filter((feature) => (feature as string).length > 0),
      };

      await addNewPricingPackageToDB(newPricingPackage);
      console.log("new pricing package added");

      setServiceCount([null, null]);
      setFeaturesCount([null, null]);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">
        New Package
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <form
                  className="mx-auto flex max-w-[40rem] flex-col gap-8 py-10"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <h2 className="pb-8 text-center text-2xl font-bold tracking-tight">
                    Add New Price Package
                  </h2>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Input
                        size="lg"
                        labelPlacement="outside"
                        label="Package Name"
                        placeholder="Enter package name"
                        errorMessage={fieldState.error?.message || ""}
                        isInvalid={fieldState.invalid}
                        {...field}
                      />
                    )}
                  />
                  <div>
                    <div className="flex items-center justify-between">
                      <h3>Package Services</h3>
                      <Button
                        isIconOnly
                        color="primary"
                        onClick={() => {
                          if (serviceCount.length < 5) {
                            setServiceCount((prevServiceCount) => [
                              ...prevServiceCount,
                              null,
                            ]);
                          }
                        }}
                      >
                        <Plus />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {serviceCount.map((_, i) => (
                      <div key={i} className="flex items-start gap-x-4">
                        <Controller
                          name={`service${i + 1}` as Services}
                          control={control}
                          render={({ field, fieldState }) => (
                            <Input
                              size="lg"
                              labelPlacement="outside"
                              placeholder="Enter key point"
                              errorMessage={fieldState.error?.message || ""}
                              isInvalid={fieldState.invalid}
                              {...field}
                            />
                          )}
                        />
                        <Button
                          isIconOnly
                          onClick={() => {
                            if (serviceCount.length > 1) {
                              setServiceCount((serviceCount) =>
                                serviceCount.filter((_, n) => i !== n),
                              );
                              setValue(`service${i + 1}` as Services, "");
                              console.log("clear");
                            }
                          }}
                        >
                          <X />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3>Package Features</h3>
                      <Button
                        isIconOnly
                        color="primary"
                        onClick={() => {
                          if (featuresCount.length < 5) {
                            setFeaturesCount((prevFeaturesCount) => [
                              ...prevFeaturesCount,
                              null,
                            ]);
                          }
                        }}
                      >
                        <Plus />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {featuresCount.map((_, i) => (
                      <div key={i} className="flex items-start gap-x-4">
                        <Controller
                          name={`feature${i + 1}` as Features}
                          control={control}
                          render={({ field, fieldState }) => (
                            <Input
                              size="lg"
                              labelPlacement="outside"
                              placeholder="Enter key point"
                              errorMessage={fieldState.error?.message || ""}
                              isInvalid={fieldState.invalid}
                              {...field}
                            />
                          )}
                        />
                        <Button
                          isIconOnly
                          onClick={() => {
                            if (featuresCount.length > 1) {
                              setFeaturesCount((featureCount) =>
                                featureCount.filter((_, n) => i !== n),
                              );
                              setValue(`feature${i + 1}` as Features, "");
                              console.log("clear");
                            }
                          }}
                        >
                          <X />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-end gap-x-2">
                    <Button
                      type="button"
                      color="danger"
                      onClick={() => {
                        setServiceCount([null, null]);
                        setFeaturesCount([null, null]);
                        reset();
                      }}
                    >
                      Clear
                    </Button>
                    <Button
                      type="submit"
                      color="primary"
                      isLoading={isSubmitting}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
