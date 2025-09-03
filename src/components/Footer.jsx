export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/40 dark:border-white/10">
      <div className="container-px py-8 text-center text-sm">
        © {new Date().getFullYear()} Keerthi • Built with React + Tailwind • <a className="text-teal-500 hover:underline" href="#home">Back to top</a>
      </div>
    </footer>
  )
}
