"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsArrowUpRight, BsGithub, BsArrowLeft } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getProjectBySlug } from "@/lib/projectsData";

const ProjectDetail = () => {
  const params = useParams();
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="h1 mb-4">Project Not Found</h1>
          <Link
            href="/work"
            className="text-accent hover:underline flex items-center gap-2 justify-center"
          >
            <BsArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] py-12 xl:py-16"
    >
      <div className="container mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 2.6, duration: 0.4, ease: "easeOut" },
          }}
          className="mb-8"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors group"
          >
            <BsArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 2.7, duration: 0.4, ease: "easeOut" },
          }}
          className="mb-12"
        >
          <div className="flex items-start gap-4 mb-4">
            <span className="text-8xl xl:text-9xl font-extrabold text-transparent text-outline">
              {project.num}
            </span>
            <div className="flex-1 pt-4">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider block mb-2">
                {project.category}
              </span>
              <h1 className="h1 mb-2">{project.title}</h1>
              <p className="text-xl text-white/60">{project.subtitle}</p>
            </div>
          </div>

          {/* Project Meta */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm">
            <div>
              <span className="text-white/60">Client Type: </span>
              <span className="text-white font-semibold">
                {project.clientType}
              </span>
            </div>
            <div>
              <span className="text-white/60">Role: </span>
              <span className="text-white font-semibold">{project.role}</span>
            </div>
            <div>
              <span className="text-white/60">Duration: </span>
              <span className="text-white font-semibold">
                {project.duration}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-16">
          {/* Left Column - Image and Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.8, duration: 0.4, ease: "easeOut" },
            }}
            className="xl:col-span-1"
          >
            {/* Project Image */}
            <div className="relative h-[300px] xl:h-[400px] rounded-xl overflow-hidden mb-8 group">
              <Image
                src={project.image}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt={project.title}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[70px] rounded-xl bg-accent hover:bg-accent-hover text-primary flex items-center justify-center gap-3 font-semibold transition-colors group">
                        <span>View Live</span>
                        <BsArrowUpRight className="text-2xl group-hover:rotate-45 transition-transform" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Open live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}

              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[70px] rounded-xl bg-white/5 border border-accent hover:bg-accent hover:text-primary text-accent flex items-center justify-center gap-3 font-semibold transition-colors group">
                        <span>GitHub</span>
                        <BsGithub className="text-2xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View source code</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
            </div>

            {/* Tech Stack */}
            <div className="bg-[#232329] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.9, duration: 0.4, ease: "easeOut" },
            }}
            className="xl:col-span-2 space-y-8"
          >
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Project <span className="text-accent">Overview</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Detailed Description */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                About This <span className="text-accent">Project</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                {project.detailedDescription}
              </p>
              {project.pwaNote && (
                <p className="text-accent/90 leading-relaxed mt-4 italic border-l-2 border-accent pl-4">
                  {project.pwaNote}
                </p>
              )}
              {project.detailedDescriptionContinued && (
                <p className="text-white/80 leading-relaxed mt-4">
                  {project.detailedDescriptionContinued}
                </p>
              )}
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Key <span className="text-accent">Features</span>
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 3 + index * 0.05,
                        duration: 0.3,
                      },
                    }}
                    className="flex items-start gap-3 bg-[#232329] rounded-lg p-4"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Technical <span className="text-accent">Challenges</span>
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <span className="text-accent font-bold mt-1">
                        {index + 1}.
                      </span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>

        {/* Navigation to Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 3.2, duration: 0.4, ease: "easeOut" },
          }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">
              Explore More <span className="text-accent">Projects</span>
            </h3>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-semibold rounded-lg transition-colors"
            >
              <span>View All Projects</span>
              <BsArrowUpRight className="text-xl" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectDetail;
