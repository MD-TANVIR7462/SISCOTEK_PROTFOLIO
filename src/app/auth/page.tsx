"use client";

import { auth } from "@/firebase/firebase.config";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const authFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type AuthForm = z.infer<typeof authFormSchema>;

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { control, reset, handleSubmit } = useForm<AuthForm>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({ email, password }: AuthForm) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
      reset();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative z-10 flex min-h-screen items-center justify-center">
      <Card
        isBlurred
        classNames={{
          base: [
            "dark:bg-background/60",
            "backdrop-blur-md",
            "backdrop-saturate-150",
            "p-6 mx-4 border border-foreground/10 sm:break-inside-avoid md:p-8 w-full max-w-[32rem]",
          ],
        }}
      >
        <div className="flex items-center justify-center pb-12 pt-4">
          <Image
            src="/images/named-logo.webp"
            height="80"
            width="250"
            alt="logo"
          />
        </div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                size="lg"
                labelPlacement="outside"
                label="Email Address"
                placeholder="example@mail.com"
                errorMessage={fieldState.error?.message || ""}
                isInvalid={fieldState.invalid}
                {...field}
                classNames={{
                  label: "text-base font-semibold",
                  inputWrapper: [
                    "bg-background",
                    "data-[hover=true]:bg-background/40",
                    "group-data-[focus=true]:bg-background/40",
                    "border border-foreground/20 h-14",
                  ],
                }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                size="lg"
                labelPlacement="outside"
                label="Password"
                type="password"
                placeholder="strong password"
                errorMessage={fieldState.error?.message || ""}
                isInvalid={fieldState.invalid}
                {...field}
                classNames={{
                  label: "text-base font-semibold",
                  inputWrapper: [
                    "bg-background",
                    "data-[hover=true]:bg-background/40",
                    "group-data-[focus=true]:bg-background/40",
                    "border border-foreground/20 h-14",
                  ],
                }}
              />
            )}
          />
          <Button
            size="lg"
            color="primary"
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            Authenticate
          </Button>
        </form>
      </Card>
    </main>
  );
}
