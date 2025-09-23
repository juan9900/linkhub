"use server";
import { createClient } from "@/utils/supabase/server";

export async function signUp(formData: FormData) {
  console.log(formData);
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password1") as string,
    options: {
      data: {
        first_name: formData.get("firstName"),
        last_name: formData.get("lastName"),
      },
    },
  });

  if (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error,
    };
  }

  return {
    ok: true,
  };
}
