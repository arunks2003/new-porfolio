"use client";

import React from "react";
import { MotionDiv } from "../components/ui/motion-div";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import projectsData from "@/data/projects.json"; // Import your JSON data

const ProjectsSection = () => {
  const stagger = 0.2;
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative py-12 md:py-16 lg:py-20 bg-gray-950 overflow-hidden"
      id="projects"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-dark.svg')] bg-[length:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with animation */}
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured works. Each project was built with
            passion and attention to detail.
          </p>
        </MotionDiv>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projectsData.projects.map((project, index) => (
            <MotionDiv
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={variants}
              transition={{
                duration: 0.6,
                delay: index * stagger,
              }}
              className="w-full h-full"
            >
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-gray-800 w-full h-full rounded-xl p-6 border border-gray-800 flex flex-col">
                  {/* Featured badge */}
                  {project.isFeatured && (
                    <CardItem
                      translateZ="30"
                      className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg"
                    >
                      Featured
                    </CardItem>
                  )}

                  {/* Project image */}
                  <CardItem translateZ="100" className="w-full mt-4">
                    <div className="relative h-48 w-full overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        height="400"
                        width="600"
                        className="h-full w-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                        alt={project.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    </div>
                  </CardItem>

                  {/* Project title */}
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white mt-6"
                  >
                    {project.title}
                  </CardItem>

                  {/* Project description */}
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-400 text-sm mt-2 flex-grow"
                  >
                    {project.description}
                  </CardItem>

                  {/* Tech stack tags */}
                  <CardItem
                    translateZ="40"
                    className="flex flex-wrap gap-2 mt-4"
                  >
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </CardItem>

                  {/* Action buttons */}
                  <div className="flex justify-between items-center mt-6">
                    <CardItem
                      translateZ={30}
                      as="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </CardItem>
                    <CardItem
                      translateZ={40}
                      as="a"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                    >
                      Live Demo
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </MotionDiv>
          ))}
        </div>

        {/* View more button */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: projectsData.projects.length * stagger }}
          className="text-center mt-8 md:mt-12 lg:mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-gray-800 text-gray-300 rounded-lg hover:bg-gray-900/50 hover:text-white transition-colors"
          >
            View All Projects
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ProjectsSection;
