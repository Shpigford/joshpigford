import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@/utils/supabase/actions';
import { editArticle } from './actions';

export default function EditArticlePage() {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState({ title: '', slug: '', body: '' });

  useEffect(() => {
    const fetchArticle = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;
      if (data) setArticle(data);
    };

    if (slug) fetchArticle();
  }, [slug]);

  return (
    <form className="flex flex-col gap-4 font-serif" action={editArticle}>
      <label htmlFor="title" className="font-bold">Title:</label>
      <input id="title" name="title" type="text" required className="text-black rounded-md p-2 focus:outline-none " value={article.title} />

      <label htmlFor="slug" className="font-bold">Slug:</label>
      <input id="slug" name="slug" type="text" required className="text-black rounded-md p-2 focus:outline-none" value={article.slug} />

      <label htmlFor="body" className="font-bold">Body:</label>
      <textarea id="body" name="body" required className="text-black rounded-md p-2 focus:outline-none" value={article.body}></textarea>

      <button type="submit" className="bg-gold-500 hover:bg-gold-700 text-black font-bold py-2 px-4 rounded">
        Edit Article
      </button>
    </form>
  );
}
