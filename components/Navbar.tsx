import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import "@/components/navbar.css";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
        {/* Logo and Branding */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={32}
            height={32}
            className="w-8 h-8"
            alt="Zoom Clone"
          />
          <p className="text-[20px] lg:text-[26px] font-extrabold text-white hidden sm:block">
            Zoom Clone
          </p>
        </Link>

        {/* Navigation and Authentication */}
        <div className="flex items-center space-x-4 sm:space-x-8">
          {/* Mobile Logout Button */}
          <SignedIn>
            <Button className="bg-dark-2 border border-gray-500 text-slate-100 shadow-slate-700 font-semibold sm:hidden">
              <SignOutButton>Logout</SignOutButton>
            </Button>
          </SignedIn>

          {/* Desktop SignIn/SignOut */}
          <div className="hidden sm:block">
            <SignedIn>
              <Button className="bg-dark-2 border border-gray-500 text-slate-100 shadow-slate-700 shadow-sm font-semibold">
                <SignOutButton>Logout</SignOutButton>
              </Button>
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <Button className="bg-blue-500 text-white">Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Mobile Navigation Menu */}
          <MobileNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
