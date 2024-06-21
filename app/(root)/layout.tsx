<<<<<<< HEAD
import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ZOOM CLONE (UTSAV PATEL)",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main>
        <StreamVideoProvider>{children}</StreamVideoProvider>
      </main>
    </>
  );
};

export default RootLayout;
=======
import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ZOOM CLONE (UTSAV PATEL)",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main>
        <StreamVideoProvider>{children}</StreamVideoProvider>
      </main>
    </>
  );
};

export default RootLayout;
>>>>>>> 3a16bc81b4ffe0c182d842385f865c6cd1fda42c
