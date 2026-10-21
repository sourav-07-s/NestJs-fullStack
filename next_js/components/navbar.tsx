import Link from "next/link";
import favicon from "../app/J-favicon.png";
import { getSession } from "@/lib/Auth/auth";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import SignOutBtn from "./sign-out-btn";

export default async function Navbar() {
  const session = await getSession();
  return (
    <nav className=" fixed top-0 left-2 right-2 z-50 mx-2 mt-4 rounded-full border border-white/10 bg-gray-800/90 px-6 py-2 shadow-lg backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-3xl font-bold text-black"
        >
          <img
            src={favicon.src}
            alt="Job Tracker"
            className="h-9 w-9 rounded-full"
          />
          <span>Job Tracker</span>
        </Link>

        <div className="flex items-center  gap-5 ">
          {session?.user ? (
            <>
              <Link
                href="/dashboard"
                className="text-gray-200 text-lg hover:text-black hover:bg-white/70 rounded-3xl"
              >
                Dashboard
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={<Button className="rounded-full" />}
                >
                  <Avatar>
                    <AvatarFallback className="font-extrabold text-black">
                      {session.user.name?.charAt(0).toUpperCase() || ""}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>
                      <div>
                        <p>{session.user.name}</p>
                        <p>{session.user.email}</p>
                      </div>
                    </DropdownMenuLabel>

                    <SignOutBtn  />


                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="rounded-full px-5 py-2 text-lg font-bold text-white transition hover:bg-black/80 hover:text-white"
              >
                Log In
              </Link>

              <Link href="/sign-up">
                <button className="rounded-full  px-5 py-2 text-lg bg-white/40  font-bold text-black transition hover:bg-white/80">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
