import { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
}

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: projects } = await supabase.from("projects").select().order('year', { ascending: true });

  return (
    <div className="prose dark:prose-invert font-serif max-w-full w-full">
      <div>
        <h1 className="font-serif text-4xl">Projects</h1>
        <p className="text-lg">I&apos;ve worked on (and continue to work on) an absurd number of things. Current tally? {projects?.length} projects.</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Started</th>
            <th>Description</th>
            <th>What Happened</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project) => (
            <tr key={project.id} className="">
              <td className="px-2 py-3">
                <Link href={`/projects/${project.slug}`}>{project.name}</Link>
              </td>
              <td>{project.year}</td>
              <td>{project.description}</td>
              <td>{project.outcome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

