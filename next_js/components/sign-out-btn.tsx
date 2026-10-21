"use client";

import { signOut } from "@/lib/Auth/auth-client";
import { Button } from "./ui/button";

export default function SignOutBtn() {
  async function handleSignOut() {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/sign-in";
        },
      },
    });
  }

  return (
    <Button variant="ghost" onClick={handleSignOut}>
      Log Out
    </Button>
  );
}