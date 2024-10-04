import { navLinks } from "@/config";
import {
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import * as React from "react";

type MobileNavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MobileNav({
  isMenuOpen,
  setIsMenuOpen,
}: Readonly<MobileNavProps>) {
  return (
    <React.Fragment>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
      <NavbarMenu
        className="space-y-2 py-6"
        onClick={() => setIsMenuOpen(false)}
      >
        {navLinks.map(({ label, href }) => (
          <NavbarMenuItem key={href}>
            <Link href={href} className="w-full capitalize text-foreground/80">
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            className="w-full text-base"
            color="foreground"
            href="/terms-of-service"
          >
            Terms of Service
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-base"
            color="foreground"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </React.Fragment>
  );
}
