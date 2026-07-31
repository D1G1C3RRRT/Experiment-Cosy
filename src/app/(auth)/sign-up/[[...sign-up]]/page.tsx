import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Create your COSY Studio account</CardTitle>
          <CardDescription>Billing, auth, and AI provider environment variables are documented for the next step.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-6 text-charcoal/75 dark:text-cream/75">
            The starter blueprint already includes Prisma, Stripe, and Clerk dependencies so you can continue with the guided prompts.
          </p>
          <div className="flex gap-3">
            <Link className={buttonVariants()} href="/sign-in">
              Go to sign in
            </Link>
            <Link className={cn(buttonVariants({ variant: "secondary" }))} href="/">
              Back to dashboard
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
