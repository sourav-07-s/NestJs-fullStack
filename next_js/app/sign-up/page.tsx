"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/dist/client/link";
import { useState } from "react";
import {signUp} from "@/lib/Auth/auth-client";
import { useRouter } from "next/dist/client/components/navigation";




export default function SignUpPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
 
  const router = useRouter();



 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setError("");
  setLoading(true);

  try {
    const result = await signUp.email({
      name,
      email,
      password,
    });

    console.log("Signup result:", result);
    console.log("Signup error:", result.error);

    if (result.error) {
      setError(
        result.error.message || `Signup failed (status: ${result.error.status})`
      );
      return;
    }

    router.push("/dashboard");
    router.refresh();
  } catch (err) {
    console.error("Signup exception:", err);

    setError(
      err instanceof Error ? err.message : "Unexpected signup error"
    );
  } finally {
    setLoading(false);
  }
}


   return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gray-900 p-4">
      <Card className="w-full max-w-md bg-gray-800  border-gray-200 shadow-lg rounded-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-gray-100">
            Sign Up
          </CardTitle>
          <CardDescription className="text-gray-100">
            Create an account to start tracking your job applications
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <CardContent className="space-y-4">
            {error && (
              <div className="rounded-lg w-full bg-destructive/25 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-200">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-gray-300 focus:border-primary focus:ring-primary target:text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-gray-300 focus:border-primary focus:ring-primary target:text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-200">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="border-gray-300 focus:border-primary focus:ring-primary target:text-white"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white "
              disabled={loading}
            >
              {loading ? "Creating account..." : "Sign Up"}
            </Button >
            <p className="text-center text-sm text-gray-700">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-medium text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}