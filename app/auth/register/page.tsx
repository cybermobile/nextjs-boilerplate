'use client'

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Ship } from "lucide-react";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      // Replace this with your actual registration logic
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (response.ok) {
        router.push('/auth/login');
      } else {
        // Handle error (e.g., show error message)
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-md">
        <div className="flex items-center gap-2">
          <Ship className="w-10 h-10 text-blue-600" aria-hidden="true" />
          <h1 className="text-2xl font-bold">Maritime Certifications</h1>
        </div>
        
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Create your maritime certification account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input 
                    id="fullName" 
                    placeholder="Full Name" 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    aria-label="Full Name"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input 
                    id="email" 
                    placeholder="Email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input 
                    id="password" 
                    placeholder="Password" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    aria-label="Password"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input 
                    id="confirmPassword" 
                    placeholder="Confirm Password" 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    aria-label="Confirm Password"
                  />
                </div>
              </div>
              <CardFooter className="flex flex-col mt-4 px-0">
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? "Registering..." : "Register"}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/auth/login"
          >
            Already have an account? Login
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/file.svg"
            alt=""
            width={16}
            height={16}
            aria-hidden="true"
          />
          Terms of Service
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/window.svg"
            alt=""
            width={16}
            height={16}
            aria-hidden="true"
          />
          Privacy Policy
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/globe.svg"
            alt=""
            width={16}
            height={16}
            aria-hidden="true"
          />
          Contact Support
        </a>
      </footer>
    </div>
  );
}