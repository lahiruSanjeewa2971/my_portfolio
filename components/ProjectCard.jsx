"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1 * index,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="group h-full"
    >
      <Link href={`/work/${project.slug}`} className="block h-full">
        <div className="flex flex-col h-full rounded-xl overflow-hidden bg-[#232329] hover:bg-[#2a2a30] transition-all duration-500">
          {/* Image */}
          <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
            <Image
              src={project.image}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              alt={project.title}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#232329] via-[#232329]/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-6 xl:p-8">
            {/* Top Section - Number, Title, Description */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-5xl font-extrabold text-outline text-transparent">
                      {project.num}
                    </span>
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl xl:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Arrow icon */}
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent flex items-center justify-center group-hover:bg-accent group-hover:rotate-45 transition-all duration-500 flex-shrink-0">
                  <BsArrowUpRight className="text-accent text-xl group-hover:text-primary" />
                </div>
              </div>
            </div>

            {/* Bottom Section - Tech Stack (always at bottom) */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {project.stack.slice(0, 3).map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                >
                  {item.name}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60">
                  +{project.stack.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
