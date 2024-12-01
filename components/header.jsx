import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FolderOpen, PenBox } from "lucide-react";
import UserMenu from "./user-menu";

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="py-4 px-6 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="reflect-logo"
            width={200}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center gap-4">
          <SignedIn>
            <Link href={"/dashboard#collections"}>
              <Button variant="outline" className="flex items-center gap-2">
                <FolderOpen size={18} />
                <span className="hidden md:inline lg:inline xl:inline">
                  Collections
                </span>
              </Button>
            </Link>
          </SignedIn>

          <Link href={"/journal/write"}>
            <Button variant="journal" className="flex items-center gap-2">
              <PenBox size={18} />
              <span className="hidden md:inline lg:inline xl:inline">
                Write new
              </span>
            </Button>
          </Link>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
