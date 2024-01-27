import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { logout } from "./actions";

export default async function MissionControlPage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/mission-control/login");
  }

  return (
    <div>
      <p>Hello {data.user.email}</p>
      <form>
        <button formAction={logout}>Log out</button>
      </form>
    </div>
  );
}
