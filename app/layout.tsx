<<<<<<< HEAD
=======
// Root's Main View File

>>>>>>> 3a16bc81b4ffe0c182d842385f865c6cd1fda42c
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import "@stream-io/video-react-sdk/dist/css/styles.css";
<<<<<<< HEAD
import "react-datepicker/dist/react-datepicker.css";
=======

>>>>>>> 3a16bc81b4ffe0c182d842385f865c6cd1fda42c
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZOOM CLONE (UTSAV PATEL)",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <ClerkProvider
          appearance={{
            layout: {
              logoImageUrl: "/icons/logo.svg",
              socialButtonsVariant: "iconButton",
            },
            variables: {
              colorText: "#fff",
              colorPrimary: "#0E78F9",
              colorBackground: "#1c1f2e",
              colorInputBackground: "#252a41",
              colorInputText: "#fff",
            },
          }}
        >
          <body className={`${inter.className} bg-dark-2`}>
            {children}
            <Toaster />
          </body>
        </ClerkProvider>
      </html>
    </>
  );
}
