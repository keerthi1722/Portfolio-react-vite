import { motion } from "framer-motion";

export default function HeroAbout() {
  return (
    <section id="home" className="section-y container-px">
      <div className="grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Column (Text) */}
        <div>
          <span className="badge">Open to Opportunities</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi, I'm Keerthi
            <span className="block text-teal-500">Aspiring Software Developer</span>
          </h1>

          {/* About Me Text */}
          <p className="mt-4 text-lg text-navy-600 dark:text-white/80 max-w-xl">
            Final-year Computer Science student passionate about building clean, user-focused interfaces.  
            I love turning ideas into real products using React and modern JS. I enjoy problem-solving with Python, C, and Java, 
            contributing to team projects, and learning new tools fast.
          </p>

          {/* Buttons + Social Links */}
          <div className="mt-8 flex gap-4 items-center flex-wrap">
            {/* Resume Button */}
            <a href="/resume.pdf" download className="btn btn-primary">
              Download Resume
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/keerthi1722"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-navy-700 dark:text-teal-300 hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.6 1.6 2.7 1.1.1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.1 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.4-2.8 5.4-5.5 5.7.4.3.8.9.8 1.9v2.8c0 .3.2.6.8.5A12 12 0 0 0 12 0z" />
              </svg>
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/peram-keerthi-453b9131a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-navy-700 dark:text-teal-300 hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.7 0 5-2.2 5-5V5c0-2.8-2.3-5-5-5zM7.1 20.5H3.6V9h3.5v11.5zM5.4 7.5C4.2 7.5 3.3 6.6 3.3 5.4c0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1c0 1.2-1 2.1-2.1 2.1zM20.5 20.5h-3.5v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7h-3.5V9h3.3v1.6h.1c.4-.8 1.5-1.8 3-1.8 3.2 0 3.8 2.1 3.8 4.8v7z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column (Profile Image as Circle) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-85 h-85 rounded-full overflow-hidden shadow-lg">
            <img
              src="/images/mine.png"  
              alt="Keerthi"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
