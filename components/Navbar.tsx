<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import "@/components/navbar.css";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={32}
            height={32}
            className="max-sm:size-10"
            alt="Zoom Clone"
          />
          <p className="text-[26px] font-extrabold text-white max-sm:hidden ">
            Zoom Clone
          </p>
        </Link>
        <div className="flex-between gap-5">
          {
            <SignedIn>
              <UserButton />
            </SignedIn>
          }
          <MobileNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
=======
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import "@/components/navbar.css";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={32}
            height={32}
            className="max-sm:size-10"
            alt="Zoom Clone"
          />
          <p className="text-[26px] font-extrabold text-white max-sm:hidden ">
            Zoom Clone
          </p>
        </Link>
        <div className="flex-between gap-5">
          {
            <SignedIn>
              <UserButton />
            </SignedIn>
          }
          <MobileNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
>>>>>>> 3a16bc81b4ffe0c182d842385f865c6cd1fda42c
