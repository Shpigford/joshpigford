"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/actions";

export async function logout(formData: FormData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const data = await supabase.auth.signOut();

  if (data.error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/mission-control/login");
}
