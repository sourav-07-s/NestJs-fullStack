


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <main className=" flex-1">
        <section className="container mx-auto px-auto py-32">
          <div  className = "mx-auto max-w-4xl text-center ">
          
            <h1 className="text-6xl font-bold mb-6 ">
              A Better Way to Track Your Application
            </h1>

            <p className="text-muted-foreground mb-10 text-2xl">
              Capture,Organize and analyze your job search in one place.
            </p>
          </div>

          <div  className = " flex flex-col items-center gap-4">
            <button>Start for Free</button>
            <p>Free Forver No credit card required</p>
          </div>
        </section>
      </main>
    </div>
  );
}
