import { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug;
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: article } = await supabase.from("articles").select().eq('slug', slug).single();

  return {
    title: article.title,
  }
}

export default async function Page({ params }: Props) {
  const slug = params.slug;
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: article } = await supabase.from("articles").select().eq('slug', slug).single();

  return (
    <div className="prose dark:prose-invert font-serif">
      <Link href="/articles">Articles</Link> <span className="text-gold-400">⦂⦚</span>
      <h1 className="font-serif text-4xl mt-2 mb-0 flex items-center gap-x-3">{article.title}</h1>
      <span className="text-gray-500 text-sm">
        {new Date(article.publish_at).toLocaleDateString('en-US', {
          month: 'short', day: 'numeric', year: 'numeric'
        })}
      </span>

      <article>
        <ReactMarkdown>{article.body}</ReactMarkdown>
      </article>

    </div>
  )
}

