"use client";
import React from "react";
import { MotionDiv } from "./ui/motion-div";
import { educationData } from "@/data/profileData";

const EducationTimeline = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "graduation-cap":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L0 7l12 5 10-4.166V17.5h2V7L12 2zM3.999 8.754v4.91l7.103 2.96 7.103-2.96v-4.91L12 11.74 3.999 8.754zM19 15.057l-7 2.916-7-2.916V12.96l7 2.916 7-2.916v2.097z" />
          </svg>
        );
      case "university":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L2 6v2h20V6L12 1zm0 4.47L18 6v1H6V6l6-.53zM4 10v7h3v-7H4zm5 0v7h6v-7H9zm7 0v7h3v-7h-3zm3-2H4V8h16v1z" />
          </svg>
        );
      case "school":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
          </svg>
        );
    }
  };

  return (
    <section
      className="relative py-20 bg-gray-950 overflow-hidden"
      id="education"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-dark.svg')] bg-[length:100px_100px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/90"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Education
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The foundation of my technical expertise and problem-solving skills
          </p>
        </MotionDiv>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/20 via-pink-500/30 to-transparent"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <MotionDiv
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center justify-between gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-gray-950"></div>

                {/* Content card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  } p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 shadow-lg overflow-hidden relative`}
                >
                  {/* Glow effect */}
                  <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0%,rgba(168,85,247,0.1)_20%,transparent_40%)] opacity-30 animate-[rotate_20s_linear_infinite]"></div>

                  <div className="relative z-10">
                    <div
                      className={`flex ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      } mb-2`}
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full text-sm font-medium text-purple-400">
                        {renderIcon(item.icon)}
                        {item.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.degree}
                    </h3>
                    <h4 className="text-lg font-medium text-purple-400 mb-3">
                      {item.institution}
                    </h4>
                    <p className="text-gray-400 mb-4">{item.description}</p>

                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-4 h-4 mt-1 mr-2 text-pink-400 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for mobile */}
                <div className="w-8 sm:w-16 flex-shrink-0"></div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default EducationTimeline;
