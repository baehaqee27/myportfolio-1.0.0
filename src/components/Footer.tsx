// src/components/Footer.tsx

// 1. Import ikon-ikon (kita udah instal 'lucide-react')
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

// 2. Import komponen Button
import { Button } from "./ui/button";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Teks Copyright (sebelah kiri) */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} {siteConfig.author.name} (
          {siteConfig.name}).
          <br />
          {siteConfig.author.bio}
        </p>

        {/* Social Icons (sebelah kanan) */}
        <div className="flex gap-2">
          <Button asChild variant="ghost" size="icon">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>

          <Button asChild variant="ghost" size="icon">
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>

          <Button asChild variant="ghost" size="icon">
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href={siteConfig.links.email}>
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
