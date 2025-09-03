import { Moon, Sun, Menu } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-navy-900/60 border-b border-white/40 dark:border-white/10">
      <div className="container-px flex items-center justify-between h-16">
        <a href="#home" className="font-extrabold text-xl">Keerthi<span className="text-teal-500">.</span></a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (<a key={l.href} href={l.href} className="hover:text-teal-500 transition">{l.label}</a>))}
          <button
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="btn btn-ghost rounded-full border border-white/40 dark:border-white/10"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span className="text-sm hidden lg:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Open Menu"><Menu /></button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/40 dark:border-white/10">
          <div className="container-px py-3 flex flex-col gap-3">
            {links.map(l => (<a onClick={() => setOpen(false)} key={l.href} href={l.href} className="hover:text-teal-500 transition">{l.label}</a>))}
            <button
              aria-label="Toggle Theme"
              onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); setOpen(false) }}
              className="btn btn-ghost rounded-full border border-white/40 dark:border-white/10 self-start"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              <span className="text-sm">{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
