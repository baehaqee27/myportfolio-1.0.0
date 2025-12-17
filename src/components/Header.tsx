// src/components/Header.tsx
"use client";

import Link from "next/link";
import {
  Menu,
  Home,
  Folder,
  PenTool,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
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

  // Icon mapping for navigation
  const getIcon = (href: string) => {
    switch (href) {
      case "/":
        return <Home className="w-5 h-5" />;
      case "/projects":
        return <Folder className="w-5 h-5" />;
      case "/blog":
        return <PenTool className="w-5 h-5" />;
      case "/contact":
        return <Mail className="w-5 h-5" />;
      default:
        return <Home className="w-5 h-5" />;
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav className="glass-panel rounded-full px-8 py-4 flex justify-between items-center w-[90%] md:w-auto md:gap-12">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-primary transition-colors"
        >
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
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex flex-col h-full border-l border-border/10 bg-linear-to-b from-background to-background/95 backdrop-blur-none w-[85%] sm:w-[350px] p-6"
            >
              <SheetHeader className="text-left mb-6">
                <SheetTitle className="text-xl font-bold tracking-wide bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  MATTRIZZ
                </SheetTitle>
              </SheetHeader>

              <div className="flex-1 flex flex-col gap-1">
                {siteConfig.navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-200 group relative overflow-hidden ${
                        isActive
                          ? "text-primary font-medium bg-primary/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
                      )}
                      <span
                        className={`p-1.5 rounded-md transition-colors ${
                          isActive
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {getIcon(link.href)}
                      </span>
                      <span className="text-base tracking-wide">
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto pt-6 border-t border-border/5">
                <div className="flex justify-between items-center mb-6 px-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Appearance
                  </span>
                  <ThemeToggle />
                </div>

                <div className="flex gap-6 justify-center">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-center text-[10px] text-muted-foreground/50 mt-6 font-mono uppercase tracking-widest">
                  © 2025 Mattrizz
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
