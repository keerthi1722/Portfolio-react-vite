export default function Contact() {
  return (
    <section id="contact" className="section-y container-px">
      <div className="card p-6">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2 opacity-80">Have an opportunity or question? Let’s talk.</p>
        <form className="mt-6 grid sm:grid-cols-2 gap-4">
          <input className="px-4 py-3 rounded-xl bg-white dark:bg-navy-800 border border-navy-100 dark:border-white/10" placeholder="Your name" />
          <input className="px-4 py-3 rounded-xl bg-white dark:bg-navy-800 border border-navy-100 dark:border-white/10" placeholder="Email address" type="email" />
          <textarea className="sm:col-span-2 px-4 py-3 rounded-xl bg-white dark:bg-navy-800 border border-navy-100 dark:border-white/10" rows="5" placeholder="Message" />
          <div className="sm:col-span-2">
            <a href="mailto:keerthi@example.com" className="btn btn-primary">Send Email</a>
          </div>
        </form>
      </div>
    </section>
  )
}
