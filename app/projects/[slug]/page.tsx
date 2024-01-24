import { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug;
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: project } = await supabase.from("projects").select().eq('slug', slug).single();

  return {
    title: project.name,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: project } = await supabase.from("projects").select().eq('slug', slug).single();

  return (
    <div className="prose dark:prose-invert font-serif max-w-full w-full">
      <div>
        <Link href="/projects">Projects</Link> <span className="text-gold-400">⦂⦚</span>
        <h1 className="font-serif text-4xl mt-2 flex items-center gap-x-3">{project.name} <span className="text-gray-400">⦚</span> <span className="text-gray-200 text-lg">{project.year}</span></h1>
        <p className="text-lg">{project.description}</p>
      </div>

    </div>
  )
}

