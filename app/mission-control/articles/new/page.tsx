import { createArticle } from './actions'

export default function NewArticlePage() {
  return (
    <form className="flex flex-col gap-4 font-serif" action={createArticle}>
      <label htmlFor="title" className="font-bold">Title:</label>
      <input id="title" name="title" type="text" required className="text-black rounded-md p-2 focus:outline-none " />

      <label htmlFor="slug" className="font-bold">Slug:</label>
      <input id="slug" name="slug" type="text" required className="text-black rounded-md p-2 focus:outline-none" />

      <label htmlFor="body" className="font-bold">Body:</label>
      <textarea id="body" name="body" required className="text-black rounded-md p-2 focus:outline-none"></textarea>

      <button type="submit" className="bg-gold-500 hover:bg-gold-700 text-black font-bold py-2 px-4 rounded">
        Create Article
      </button>
    </form>
  )
}