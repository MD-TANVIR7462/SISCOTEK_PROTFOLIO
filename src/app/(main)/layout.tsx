import { Footer } from "@/components/footer";
import { MainNav } from "@/components/navbar/main-nav";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <MainNav />
        {children}
      </div>
      <Footer />
    </div>
  );
}
