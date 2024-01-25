import { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Articles',
}

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: articles } = await supabase.from("articles").select();

  return (
    <div className="prose dark:prose-invert font-serif max-w-full w-full">
      <div>
        <h1 className="font-serif text-4xl">Articles</h1>
      </div>

      <ul>
        {articles?.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            <span className="text-gray-500 text-sm ml-3">
              {new Date(article.publish_at).toLocaleDateString('en-US', {
                month: 'short', day: 'numeric', year: 'numeric'
              })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

