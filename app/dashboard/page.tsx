import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <div className="flex min-h-svh w-full  p-6 md:p-10">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <p>Welcome to your dashboard!</p>
      </div>
    </div>
  );
}
