import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaDatabase,
  FaReact,
} from "react-icons/fa";
import { SiC, SiJavascript, SiMongodb } from "react-icons/si";

export default function Skills() {
  const skills = {
    "Programming Languages": [
      { name: "C", icon: <SiC className="text-blue-600 text-3xl" /> },
      { name: "Python", icon: <FaPython className="text-yellow-500 text-3xl" /> },
      { name: "Java", icon: <FaJava className="text-red-500 text-3xl" /> },
    ],
    "Web Technologies": [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
      { name: "React", icon: <FaReact className="text-sky-400 text-3xl" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-3xl" /> },
    ],
    Databases: [
      { name: "SQL", icon: <FaDatabase className="text-green-600 text-3xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
    ],
  };

  return (
    <section id="skills" className="section-y container-px">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 25px rgba(0, 255, 255, 0.6)", // Aqua glow
            }}
            whileTap={{
              scale: 0.98,
              boxShadow: "0px 8px 30px rgba(0, 255, 255, 0.9)", // Stronger aqua glow on touch
            }}
            className="p-6 rounded-xl shadow bg-white dark:bg-navy-800 cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {items.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-navy-100 dark:bg-white/10"
                >
                  {s.icon}
                  <span>{s.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
