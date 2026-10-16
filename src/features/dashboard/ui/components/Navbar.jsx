
import React, { useState } from 'react'

const Navbar = () => {
  const [search, setSearch] = useState('')

  return (
    <nav className="w-full min-h-72px bg-black text-white px-4 md:px-6 py-3 flex items-center gap-3 md:gap-4 font-sans">

      {/* Spotify Logo */}
      <a href="/" className="flex items-center gap-2 shrink-0">
        <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#1ed760]">
          <circle cx="12" cy="12" r="12" />
          <g
            fill="none"
            stroke="black"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M5.5 9c4.5-1.4 9.5-.8 13 1.5" />
            <path d="M6.5 12c3.8-1 8-.5 11 1.3" />
            <path d="M7.5 15c3-.7 6-.3 8.5 1.1" />
          </g>
        </svg>

        <span className="hidden sm:block text-2xl font-bold">
          Spotify
        </span>
      </a>

      {/* Home Button */}
      <button
        aria-label="Home"
        className="w-12 h-12 shrink-0 rounded-full bg-[#242424] hover:bg-[#333] flex items-center justify-center transition"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-white"
        >
          <path d="M12 3 2 12h3v9h5v-6h4v6h5v-9h3z" />
        </svg>
      </button>

      {/* Search Bar */}
      <div className="flex-1 max-w-470px min-w-0 h-12 rounded-full bg-[#242424] hover:bg-[#2a2a2a] focus-within:border focus-within:border-white flex items-center gap-3 px-4 transition-colors">

        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 shrink-0 fill-none stroke-[#b3b3b3]"
          strokeWidth="2"
        >
          <circle cx="10.5" cy="10.5" r="7" />
          <path d="m16 16 5 5" />
        </svg>

        <input
          type="text"
          placeholder="What do you want to play?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full min-w-0 bg-transparent outline-none text-sm text-white placeholder:text-[#b3b3b3]"
        />

        <span className="hidden md:block text-xl text-[#b3b3b3]">
          ▥
        </span>
      </div>

      {/* Navigation Links */}
      <div className="ml-auto flex items-center gap-2 md:gap-4 shrink-0">

        <a
          href="#premium"
          className="hidden lg:block text-sm font-bold text-[#b3b3b3] hover:text-white whitespace-nowrap"
        >
          Explore Premium
        </a>

        <a
          href="#install"
          className="hidden md:block text-sm font-bold text-[#b3b3b3] hover:text-white whitespace-nowrap"
        >
          Install App
        </a>

        <button className="hidden sm:block px-3 py-2 text-sm font-bold text-[#b3b3b3] hover:text-white transition">
          Sign up
        </button>

        <button className="rounded-full bg-white text-black px-4 md:px-6 py-3 text-sm font-bold hover:scale-105 transition-transform">
          Log in
        </button>
      </div>

    </nav>
  )
}

export default Navbar
