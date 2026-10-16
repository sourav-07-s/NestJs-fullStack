import Image from "next/image";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <main className=" flex-1">
        <section className="flex mx-auto px-auto py32">
          <div>
            <h1>A Better Way to Track Your Application </h1>

            <p className="text-muted-foreground">
              Capture , organize and analyze your job search in one place.
            </p>
          </div>

          <div>
            <button>Start for Free</button>
            <p>Free Forver No credit card required</p>
          </div>
        </section>
      </main>
    </div>
  );
}
