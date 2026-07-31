import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Sign in to COSY Studio</CardTitle>
          <CardDescription>Auth routes are scaffolded and ready for Clerk wiring.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-6 text-charcoal/75 dark:text-cream/75">
            Add your Clerk keys to <code>.env.local</code> and replace this shell with hosted auth components when you are ready.
          </p>
          <div className="flex gap-3">
            <Link className={buttonVariants()} href="/">
              Back to dashboard
            </Link>
            <Link className={cn(buttonVariants({ variant: "secondary" }))} href="/sign-up">
              Go to sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
