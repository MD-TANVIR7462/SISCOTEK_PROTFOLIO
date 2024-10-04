"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

// Define Zod schema for validation
const contactUsFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, { message: "First Name must be at least 3 characters." })
    .max(20, { message: "First Name cannot exceed 20 characters." }),
  lastName: z
    .string()
    .trim()
    .min(3, { message: "Last Name must be at least 3 characters." })
    .max(20, { message: "Last Name cannot exceed 20 characters." }),
  email: z.string().trim().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  message: z
    .string()
    .trim()
    .min(5, { message: "Message must be at least 5 characters." })
    .max(800, { message: "Message cannot exceed 800 characters." }),
});

// Infer form values from schema
type TContactUsForm = z.infer<typeof contactUsFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize React Hook Form with Zod validation
  const { control, handleSubmit, reset } = useForm<TContactUsForm>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (formData: TContactUsForm) => {
    try {
      console.log(formData)
      setIsSubmitting(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string,
      );
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex  w-screen items-center justify-center ">
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="my-4 mr-auto w-full rounded-2xl p-8 shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40">
          <div className="flex">
            <h1 className="text-2xl md:text-5xl font-bold uppercase">
              Send us a message
            </h1>
          </div>
          <form
            className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* First Name */}
            <Controller
              name="firstName"
              control={control}
              render={({ field, fieldState }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="First Name*"
                  className={`focus:shadow-outline  z-10 mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none ${fieldState.error ? "border-red-500" : ""}`}
                />
              )}
            />
            {/* Last Name */}
            <Controller
              name="lastName"
              control={control}
              render={({ field, fieldState }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Last Name*"
                  className={`focus:shadow-outline z-10 mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none ${fieldState.error ? "border-red-500" : ""}`}
                />
              )}
            />
            {/* Email */}
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Email*"
                  className={`focus:shadow-outline  z-10 mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none ${fieldState.error ? "border-red-500" : ""}`}
                />
              )}
            />
            {/* Phone */}
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <input
                  {...field}
                  type="tel"
                  placeholder="Phone*"
                  className={`focus:shadow-outline  z-10 mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none ${fieldState.error ? "border-red-500" : ""}`}
                />
              )}
            />
            {/* Message */}
            <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <textarea
                  {...field}
                  placeholder="Message*"
                  className={`focus:shadow-outline z-10  mt-2 h-32 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none ${fieldState.error ? "border-red-500" : ""}`}
                ></textarea>
              )}
            />
            {/* Submit Button */}
            <div className="z-10 my-2 w-full md:col-span-2">
              <button
                type="submit"
                className="focus:shadow-outline w-full rounded-lg bg-blue-900 p-3  text-sm font-bold uppercase tracking-wide text-gray-100 focus:outline-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* The Office Information Section */}
        <div className="ml-auto w-full rounded-2xl bg-blue-900 px-8 py-12 lg:-mt-96 lg:w-2/6">
          <div className="flex flex-col text-white">
            <h1 className="my-4 text-4xl font-bold uppercase">
              Drop in our office
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur
              vitae nibh viverra, auctor turpis sed, scelerisque ex.
            </p>

            <div className="my-4 flex w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-map-marker-alt pr-2 pt-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Main Office</h2>
                <p className="text-gray-400">
                  5555 Tailwind RD, Pleasant Grove, UT 73533
                </p>
              </div>
            </div>

            <div className="my-4 flex w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-phone-alt pr-2 pt-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Call Us</h2>
                <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
              </div>
            </div>

            <div className="my-4 flex w-2/3 lg:w-1/2">
              <a
                href="https://www.facebook.com/ENLIGHTENEERING/"
                target="_blank"
                rel="noreferrer"
                className="mx-1 inline-block h-8 w-8 rounded-full bg-white pt-1 text-center"
              >
                <i className="fab fa-facebook-f text-blue-900" />
              </a>
              <a
                href="https://www.linkedin.com/company/enlighteneering-inc-"
                target="_blank"
                rel="noreferrer"
                className="mx-1 inline-block h-8 w-8 rounded-full bg-white pt-1 text-center"
              >
                <i className="fab fa-linkedin-in text-blue-900" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
