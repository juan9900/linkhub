import { LoginForm } from "@/components/auth/LoginForm";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <h1>Welcome to linkhub</h1>
      <a href="/auth/login">Go to login page</a>
    </main>
  );
}
