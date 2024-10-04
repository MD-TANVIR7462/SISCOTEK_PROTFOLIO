import { navLinks } from "@/config";
import { Button } from "@nextui-org/button";
import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import { LegalButton } from "./legal-button";
import { NavContainer } from "./nav-container";

export function MainNav() {
  return (
    <NavContainer>
      <NavbarContent className="hidden gap-3 md:flex" justify="end">
        {navLinks.map(({ label, href }) => (
          <NavbarItem key={href}>
            <Button
              variant="light"
              size="sm"
              className="text-base capitalize text-foreground/80"
            >
              <Link href={href}>{label}</Link>
            </Button>
          </NavbarItem>
        ))}
        <NavbarItem>
          <LegalButton />
        </NavbarItem>
      </NavbarContent>
    </NavContainer>
  );
}
