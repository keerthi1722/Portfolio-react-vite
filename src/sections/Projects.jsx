import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react"; // icons

const items = [
  {
    title: "Doctor Appointment Booking Application",
    desc: "A secure full-stack web application enabling patients to book appointments online and doctors to manage schedules.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/keerthi1722/doctor-appointment-app",
    website: "https://doctor-appointment-app-rust-eta.vercel.app/",
    image: "/images/doctor.png", // ✅ put image in public/images/
  },
  {
    title: "Online Voting System",
    desc: "A Python-based application that enables secure online voting with user authentication, vote encryption, and real-time result tallying.",
    tech: ["Python", "Flask/Django", "SQLite/MySQL", "HTML", "CSS"],
    github: "https://github.com/keerthi1722/voting/tree/main",
    website: "https://voting-jfqn.onrender.com",
    image: "/images/voter.png",
  },
  {
    title: "Flight Booking Application",
    desc: "A secure full-stack web application that allows users to search, book, and manage flight tickets with real-time updates.",
    tech: ["React", "CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/keerthi1722/flight-booking-app",
    website: "https://flight-finder-2g25.vercel.app/",
    image: "/images/flight.png",
  },
  {
    title: "Engagement Level Prediction Using ML",
    desc: "Built a Random Forest model to predict user engagement levels from behavioral and interaction data.",
    tech: ["Python", "Machine Learning", "Random Forest"],
    github: "https://github.com/keerthi1722/Engagement-level-prediction",
    website: "https://engagement-level-prediction.onrender.com/",
    image: "/images/engage.png",
  },
  {
    title: "Customer Behavior Analysis (KDD Approach)",
    desc: "Applied classification techniques using Orange data mining tool within a KDD framework to analyze customer behavior.",
    tech: ["Orange", "Data Mining", "Classification"],
    github: "https://github.com/keerthi1722",
    website: "https://your-demo-link.com",
    image: "/images/customer.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-y bg-teal-50/60 dark:bg-navy-800/40"
    >
      <div className="container-px">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 25px rgba(0, 255, 255, 0.6)", // aqua glow
              }}
              whileTap={{
                scale: 0.98,
                boxShadow: "0px 8px 30px rgba(0, 255, 255, 0.9)", // stronger aqua glow
              }}
              className="card p-6 rounded-xl shadow bg-white dark:bg-navy-900 cursor-pointer transition"
            >
              {/* Project image */}
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm opacity-80">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-4 flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-navy-700 dark:text-teal-300 hover:underline"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={p.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-navy-700 dark:text-teal-300 hover:underline"
                >
                  <Globe size={16} /> Live Site
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
