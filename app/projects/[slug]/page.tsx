import { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link'
import { cache } from 'react'

type Props = {
  params: { slug: string }
}

export const getProject = cache(async (slug: string) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const project = await supabase.from("projects").select().eq('slug', slug).single();
  return project
})

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug;
  const { data: project } = await getProject(slug)

  return {
    title: project.name,
  }
}

export default async function Page({ params }: Props) {
  const slug = params.slug;
  const { data: project } = await getProject(slug)

  return (
    <div className="prose dark:prose-invert font-serif max-w-full w-full">
      <div>
        <Link href="/projects">Projects</Link> <span className="text-gold-400">⦂⦚</span>
        <h1 className="font-serif text-4xl mt-2 mb-0 flex items-center gap-x-3">{project.name} <span className="text-gray-400">⦚</span> <span className="text-gray-200 text-lg">{project.year}</span></h1>
        <p className="text-lg mt-1">{project.description}</p>

        {project.notes && (
          <>
            <h2 className="font-serif text-2xl mt-8 mb-0">A bit more background</h2>
            <p className="text-lg mt-1">{project.notes}</p>
          </>
        )}

        <h2 className="font-serif text-2xl mt-8 mb-0">What happened?</h2>
        <p className="text-lg mt-1">{project.outcome}</p>

        {project.link && (
          <p className="mt-8"><a href={project.link} target="_blank" rel="noopener noreferrer" className="text-2xl">Check it out &rarr;</a></p>
        )}
      </div>

    </div>
  )
}

