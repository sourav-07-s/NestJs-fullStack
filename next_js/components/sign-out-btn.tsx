'use client';

import { signOut } from "@/lib/Auth/auth-client";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export default function SignOutBtn() {
    return(
         <DropdownMenuItem onClick={async () => {
                    await signOut();
                  }  } >
                    Log Out
                  </DropdownMenuItem>
    )
}