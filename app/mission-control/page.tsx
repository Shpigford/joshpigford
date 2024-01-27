import AuthButton from "./AuthButton";
import { cookies } from "next/headers";

export default async function Index() {
  const cookieStore = cookies();

  return (
    <div>
      <AuthButton />
    </div>
  );
}
