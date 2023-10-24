'use client'

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const handelSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    // add search term to route url
    router.push(`/${search}/`)
  }

  return (
    <form className="w-50  flex justify-center md:justify-between" onSubmit={handelSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-64 lg:w-80 text-xl rounded-xl"
        placeholder="search"
      />
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold hidden md:block">🚀</button>
    </form>
  )
}
