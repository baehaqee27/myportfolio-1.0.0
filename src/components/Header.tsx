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

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  const baseLinkClasses = "transition-colors hover:text-primary";
  const mobileBaseLinkClasses = "text-lg transition-colors hover:text-primary";

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-10">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-primary">
          PortofolioKu
        </Link>

        {/* NAVIGASI DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className={`${baseLinkClasses} ${
                  pathname === "/"
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${baseLinkClasses} ${
                  pathname === "/contact"
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${baseLinkClasses} ${
                  pathname === "/blog"
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                Blog
              </Link>
            </li>
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
                <Link
                  href="/"
                  className={`${mobileBaseLinkClasses} ${
                    pathname === "/"
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsSheetOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/contact"
                  className={`${mobileBaseLinkClasses} ${
                    pathname === "/contact"
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsSheetOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className={`${mobileBaseLinkClasses} ${
                    pathname === "/blog"
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsSheetOpen(false)}
                >
                  Blog
                </Link>

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
