

import ImageTab from "@/components/image-tab";
import { Button } from "@/components/ui/button";
import { ArrowRight   } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/Auth/auth";
import Features from "@/components/features";

export const instant = false;

export default async function Home() {

  const session = await getSession();

  if (session?.user) {
    redirect("/dashboard");
  }
  

  return (
   <div className="flex min-h-screen w-full flex-col items-stretch bg-gray-900 text-white">
      <main className=" w-full">
        <section className="container mx-auto px-auto py-32">
          <div className="mx-auto max-w-4xl text-center ">
            <h1 className="text-6xl font-bold mb-6 ">
              A Better Way to Track Your Application
            </h1>

            <p className="text-muted-foreground mb-10 text-2xl">
              Capture,Organize and analyze your job search in one place.
            </p>
          </div>

          <div className=" flex flex-col items-center gap-4">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="rounded-2xl bg-white/10 h-12 cursor-pointer px-4 text-lg text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
              >
                Start for Free
                <ArrowRight className="ml-1 h-4 w-4 " />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free Forver No credit card required
            </p>
          </div>
        </section>
        {/* Image Tab  for the showing the different features */}
        <ImageTab />

        { /* section for the showing the different features */ }

          <Features/>

       
      </main>
    </div>
  );
}
