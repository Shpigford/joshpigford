import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Link from 'next/link'

export default async function MissionControlPage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: articles } = await supabase.from("articles").select();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/mission-control/login");
  }

  return (
    <div className="prose dark:prose-invert font-serif max-w-full w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-serif text-4xl">Articles</h1>
        <Link href="/mission-control/articles/new">
          New Article
        </Link>
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {articles?.map((article) => (
            <tr key={article.id}>
              <td>
                <Link href={`/articles/${article.slug}`}>{article.title}</Link>
              </td>
              <td className="text-gray-500 text-sm">
                {new Date(article.publish_at).toLocaleDateString('en-US', {
                  month: 'short', day: 'numeric', year: 'numeric'
                })}
              </td>
              <td>
                <Link href={`/mission-control/articles/${article.slug}/edit`}>Edit</Link>
              </td>
              <td>
                <Link href={`/mission-control/articles/delete/${article.slug}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
