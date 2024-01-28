"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/actions";

export async function editArticle(formData: FormData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const data = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    body: formData.get("body") as string,
  };

  const { error } = await supabase
    .from("articles")
    .update(data)
    .match({ slug: data.slug });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/articles", "layout");
  redirect("/articles");
}
