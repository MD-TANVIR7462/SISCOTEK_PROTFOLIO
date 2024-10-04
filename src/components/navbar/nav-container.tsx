"use client";

import { Navbar } from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { MobileNav } from "./mobile-nav";

type NavContainerProps = {
  children: ReactNode;
};

export function NavContainer({ children }: Readonly<NavContainerProps>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      height="3.5rem"
      maxWidth="2xl"
      classNames={{
        wrapper: "px-2 sm:px-4",
      }}
    >
      <Link href="/" onClick={() => setIsMenuOpen(false)}>
        <Image
          src="/images/named-logo.webp"
          alt="logo"
          height={80}
          width={160}
          priority
          quality={95}
        />
      </Link>
      {children}
      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </Navbar>
  );
}
