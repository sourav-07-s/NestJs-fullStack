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
  className="w-full justify-start rounded-lg font-medium text-gray-200 bg-gray-600 transition-colors hover:bg-white/10 hover:text-white"
  onClick={handleSignOut}
>
  Log Out
</Button>
  );
}