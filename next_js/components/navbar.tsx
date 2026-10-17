
import Link from "next/link";
import favicon from "../app/J-favicon.png";

export default function Navbar() {
  return (
    <nav className="mx-2 mt-4 rounded-full border border-white/10 bg-gray-800/90 px-6 py-2 shadow-lg backdrop-blur-xl ">
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
          <Link
            href="/sign-in"
            >
           <button className="rounded-full px-5 py-2 text-lg  font-bold text-white  transition hover:bg-black/80 hover:text-white"
          >
            Log In
            </button>
          </Link>

          <Link
            href="/sign-up"
            >
            <button className="rounded-full  px-5 py-2 text-lg bg-white/40  font-bold text-black transition hover:bg-white/80"
          >
            Sign Up
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
