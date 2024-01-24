import { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Projects',
}

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: projects } = await supabase.from("projects").select();

  return (
    <div className="prose dark:prose-invert font-serif">
      <h1 className="font-serif text-4xl">Projects</h1>
      <p className="text-lg">Slowly backfilling content from the previous site. And by &quot;slowly&quot; I mean &quot;in a few years&quot; or &quot;never&quot;. 😬</p>
    </div>
  )
}

