import React, { ReactNode } from "react";

const RootLayout = ({ chilren }: { chilren: ReactNode }) => {
  return (
    <main>
      Navbar
      {chilren}
      Footer
    </main>
  );
};

export default RootLayout;
