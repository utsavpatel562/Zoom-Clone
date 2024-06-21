<<<<<<< HEAD
=======
// Login or SignIn Form using Clerk with Auth and User Management

>>>>>>> 3a16bc81b4ffe0c182d842385f865c6cd1fda42c
import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <>
      <main className="flex h-screen w-full items-center justify-center">
        <SignIn />
      </main>
    </>
  );
};

export default SignInPage;
