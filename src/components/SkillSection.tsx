"use client";
import React, { useState } from "react";
import { MotionDiv } from "@/components/ui/motion-div";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { skillsData } from "@/data/skillsData.js";
import { Cpu, Brain, Star, StarHalf } from "lucide-react";

const SkillSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Function to render proficiency stars
  const renderProficiency = (proficiency: number) => {
    const fullStars = Math.floor(proficiency);
    const hasHalfStar = proficiency % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="w-3 h-3 text-yellow-400 fill-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="w-3 h-3 text-yellow-400 fill-yellow-400"
        />
      );
    }

    return stars;
  };

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      <BackgroundBeams className="absolute inset-0 opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/80 to-gray-950/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.03),transparent_45%)]"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/5 rounded-full filter blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
          className="text-center mb-16 group"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse">
              Skills
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mt-6">
            Technologies and competencies I've mastered through projects and
            professional experience
          </p>
        </MotionDiv>

        {/* Technical Skills */}
        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left flex items-center justify-center md:justify-start gap-3">
            <Cpu className="w-6 h-6 text-purple-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Technical Skills
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.technical.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <MotionDiv
                  key={index}
                  variants={item}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 
                    hover:border-purple-500/50 transition-all duration-300 group 
                    hover:shadow-lg hover:shadow-purple-500/20
                    transform perspective-1000"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-all duration-300">
                      <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {skillGroup.category}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <MotionDiv
                          key={skillIndex}
                          whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.2 },
                          }}
                          onHoverStart={() =>
                            setHoveredSkill(`${index}-${skillIndex}`)
                          }
                          onHoverEnd={() => setHoveredSkill(null)}
                          className="flex items-center justify-between p-3 rounded-lg 
                            bg-gray-800/50 text-gray-200 
                            hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 
                            hover:text-white transition-all duration-300 
                            border border-gray-700 hover:border-purple-500/30
                            group/skill"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-md bg-gray-700/50 group-hover/skill:bg-purple-500/20">
                              <SkillIcon className="w-4 h-4 text-purple-400 group-hover/skill:text-purple-300" />
                            </div>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <div className="flex items-center gap-0.5">
                            {renderProficiency(skill.proficiency)}
                          </div>
                        </MotionDiv>
                      );
                    })}
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </MotionDiv>

        {/* Soft Skills */}
        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left flex items-center justify-center md:justify-start gap-3">
            <Brain className="w-6 h-6 text-pink-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Soft Skills
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.soft.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <MotionDiv
                  key={index}
                  variants={item}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 
                    hover:border-pink-500/50 transition-all duration-300 group 
                    hover:shadow-lg hover:shadow-pink-500/20
                    transform perspective-1000"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div
                      className="p-3 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 
                      group-hover:from-pink-500/40 group-hover:to-purple-500/40 transition-all duration-300"
                    >
                      <Icon className="w-6 h-6 text-pink-400 group-hover:text-pink-300" />
                    </div>
                    <div>
                      <p className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300 mb-2">
                        {skill.name}
                      </p>
                      <div className="flex items-center justify-center gap-0.5 mt-2">
                        {renderProficiency(skill.proficiency)}
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default SkillSection;
