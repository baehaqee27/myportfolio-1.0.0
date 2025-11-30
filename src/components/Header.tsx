// src/components/Header.tsx
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  const baseLinkClasses = "transition-colors hover:text-primary";
  const mobileBaseLinkClasses = "text-lg transition-colors hover:text-primary";

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav className="glass-panel rounded-full px-8 py-4 flex justify-between items-center w-[90%] md:w-auto md:gap-12">
        <Link href="/" className="text-2xl font-bold hover:text-primary">
          PortofolioKu
        </Link>

        {/* NAVIGASI DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${baseLinkClasses} ${
                    pathname === link.href
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* NAVIGASI MOBILE */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigasi</SheetTitle>
                <div className="border-t my-4"></div>
              </SheetHeader>
              <div className="grid gap-4 px-4 mx-4">
                {siteConfig.navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${mobileBaseLinkClasses} ${
                      pathname === link.href
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="border-t my-4"></div>

                <div className="flex justify-between items-center">
                  <span className="text-lg text-muted-foreground">Mode</span>
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
