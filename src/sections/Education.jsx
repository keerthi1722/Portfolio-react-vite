import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="section-y container-px">
      <h2 className="text-3xl font-bold">
        Education
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* B.Tech */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(0, 128, 128, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="edu-card p-6 rounded-xl shadow bg-white dark:bg-navy-800 cursor-pointer transition"
        >
          <h3 className="text-xl font-semibold">B.Tech in Computer Science</h3>
          <p className="mt-1 text-navy-600 dark:text-white/80">
            Seshadri Rao Gudlavalleru Engineering College
          </p>
          <p className="mt-1 text-sm text-gray-500">2022 – 2026 | CGPA: 9.3/10</p>
        </motion.div>

        {/* Class XII */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(0, 128, 128, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="edu-card p-6 rounded-xl shadow bg-white dark:bg-navy-800 cursor-pointer transition"
        >
          <h3 className="text-xl font-semibold">Class XII</h3>
          <p className="mt-1 text-navy-600 dark:text-white/80">
            Vijaya Kranthi Junior College
          </p>
          <p className="mt-1 text-sm text-gray-500">2020 – 2022 | 97%</p>
        </motion.div>

        {/* Class X */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(0, 128, 128, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="edu-card p-6 rounded-xl shadow bg-white dark:bg-navy-800 cursor-pointer transition"
        >
          <h3 className="text-xl font-semibold">Class X</h3>
          <p className="mt-1 text-navy-600 dark:text-white/80">
            Andhra Pradesh Residential School
          </p>
          <p className="mt-1 text-sm text-gray-500">2019 – 2020 | 96%</p>
        </motion.div>
      </div>
    </section>
  );
}
