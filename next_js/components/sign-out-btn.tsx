"use client";

import { signOut } from "@/lib/Auth/auth-client";
import { Button } from "./ui/button";

export default function SignOutBtn() {
  async function handleSignOut() {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            window.location.replace("/sign-in");
          },
        },
      });
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={handleSignOut}
    >
      Log Out
    </Button>
  );
}