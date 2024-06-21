<<<<<<< HEAD
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ZOOM CLONE (UTSAV PATEL)",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="relative">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
            <div className="w-full">{children}</div>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomeLayout;
=======
import Navbar from "@/components/Navbar";
import { Sidebar } from "lucide-react";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ZOOM CLONE (UTSAV PATEL)",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="relative">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
            <div className="w-full">{children}</div>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomeLayout;
>>>>>>> 3a16bc81b4ffe0c182d842385f865c6cd1fda42c
