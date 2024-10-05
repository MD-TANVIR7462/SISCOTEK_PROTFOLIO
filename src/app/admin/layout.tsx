"use client";

import { adminNavLinks } from "@/config";
import { auth } from "@/firebase/firebase.config";
import { cn } from "@/lib/cn";
import { Button } from "@nextui-org/button";
import { User, onAuthStateChanged } from "firebase/auth";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import Loading from "../loading";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: Readonly<DashboardLayoutProps>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(true);
  // const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  // const router = useRouter();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       setUser(currentUser);
  //     }
  //     setIsLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (!isLoading && !user) {
  //   return router.push("/auth");
  // }

  return (
    <main className="relative z-10 h-full min-h-screen ">
      <div className="container mx-auto flex max-w-7xl items-center gap-x-4 px-4 py-4 sm:py-6 md:hidden">
        <Button
          isIconOnly
          variant="bordered"
          className="md:hidden"
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        >
          <Menu />
        </Button>
        <Link href="/">
          <Image
            src="/images/named-logo.webp"
            alt="logo"
            height={60}
            width={140}
            priority
            quality={95}
          />
        </Link>
      </div>
      <aside
        className={cn(
          "fixed inset-0 z-10 h-full w-full -translate-x-full  transition-transform duration-500 md:w-[16rem] md:-translate-x-0",
          {
            "-translate-x-0": isSidebarOpen,
          },
        )}
        onClick={() => setIsSidebarOpen(false)}
      >
        <nav className="h-full w-[80%] space-y-1 border-r border-foreground/10  py-8 pl-8 shadow-md md:w-full md:space-y-2">
          <Link href="/" className="block pb-6">
            <Image
              src="/images/named-logo.webp"
              alt="logo"
              height={60}
              width={140}
              priority
              quality={95}
            />
          </Link>
          <nav className="flex flex-col items-start gap-y-3 text-lg font-medium text-foreground/60">
            {adminNavLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={cn("transition-colors hover:text-foreground/80", {
                  "text-foreground": pathname.endsWith(href),
                })}
              >
                {label}
              </Link>
            ))}
          </nav>
        </nav>
      </aside>
      <section className="inset-0 h-full min-h-screen overflow-y-scroll px-4 py-4 md:fixed md:left-[calc(16rem)] md:px-8 md:py-10">
        {children}
      </section>
    </main>
  );
}
