import { login } from './actions'

export default function LoginPage() {
  return (
    <form className="flex flex-col gap-4 font-serif">
      <label htmlFor="email" className="font-bold">Email:</label>
      <input id="email" name="email" type="email" required className="text-black rounded-md p-2 focus:outline-none " />
      <label htmlFor="password" className="font-bold">Password:</label>
      <input id="password" name="password" type="password" required className="text-black rounded-md p-2 focus:outline-none" />
      <div className="flex justify-between">
        <button type="submit" formAction={login} className="bg-gold-500 hover:bg-gold-700 text-black font-bold py-2 px-4 rounded">
          Log in
        </button>
      </div>
    </form>
  )
}