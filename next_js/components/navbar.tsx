
import Link from "next/link";
import favicon from "../app/J-favicon.png";

export default function Navbar() {
  return (
    <nav className="mx-4 mt-4 rounded-full border border-white/10 bg-gray-700 px-6 py-3 shadow-lg backdrop-blur-xl">
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

        <div className="flex items-center  gap-3">
          <Link
            href="/sign-in"
            className="rounded-full px-5 py-2 text-lg  font-bold text-black  transition hover:bg-white/10 hover:text-white"
          >
            Sign In
          </Link>

          <Link
            href="/sign-up"
            className="rounded-full bg-white px-5 py-2 text-lg  font-bold text-black transition hover:bg-white/80"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
