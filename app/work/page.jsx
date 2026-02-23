"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projectsData";
import ProjectCard from "@/components/ProjectCard";

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-16"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 2.6, duration: 0.4, ease: "easeOut" },
          }}
          className="text-center mb-12 xl:mb-16"
        >
          <h2 className="h2 mb-4">
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="max-w-[600px] mx-auto text-white/60">
            A showcase of full-stack applications I've built, from customer-facing
            booking systems to admin management platforms and event venues.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
