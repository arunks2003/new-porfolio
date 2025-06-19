"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { MotionDiv } from "./ui/motion-div";
import { profileData } from "@/data/profileData";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { redirect } from "next/navigation";

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Particles initialization function
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "location":
        return (
          <svg
            className="w-4 h-4 text-pink-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "education":
        return (
          <svg
            className="w-4 h-4 text-purple-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      className="relative w-full min-h-screen bg-gray-950 overflow-hidden"
      id="hero"
    >
      {/* Particles.js background */}
      {isClient && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: ["#9333ea", "#ec4899", "#8b5cf6"],
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />
      )}
      {/* Background elements remain the same... */}

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Left side - Image */}
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 w-full lg:w-1/2 flex justify-center relative"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-transparent group-hover:border-purple-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-[2px] z-10 rounded-2xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-[pulse_8s_ease-in-out_infinite]" />

              <Image
                src={profileData.image}
                alt="Profile Photo"
                width={600}
                height={600}
                className="relative z-20 w-full h-full object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                priority
              />
            </div>

            {/* Status badge */}
            {profileData.status.available && (
              <MotionDiv
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-5 z-30 px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-full shadow-lg flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-xs font-medium text-gray-200">
                  {profileData.status.text}
                </span>
              </MotionDiv>
            )}
          </div>
        </MotionDiv>

        {/* Right side - Content */}
        <MotionDiv
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 lg:order-2 w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        >
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-purple-400 mb-4 border border-gray-800">
              <span>{profileData.greeting}</span>
            </div>
          </MotionDiv>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="text-gray-200">I'm </span>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {profileData.name}
              <span className="absolute bottom-2 left-0 w-full h-2 bg-purple-500/20 -z-0 rounded-full" />
            </span>
          </h1>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-400 max-w-lg mx-auto lg:mx-0">
              {profileData.title}
            </h2>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {profileData.description}
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4"
          >
            {profileData.details.map((detail, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 shadow-xs"
              >
                {renderIcon(detail.icon)}
                <span className="text-sm font-medium text-gray-300">
                  {detail.text}
                </span>
              </div>
            ))}
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            {profileData.buttons.map((button, index) => (
              <button
                key={index}
                className={`px-6 py-3.5 ${
                  button.type === "primary"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/20"
                    : "bg-gray-900/70 backdrop-blur-md border border-gray-800 text-gray-200 hover:bg-gray-800/80"
                } font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group`}
                onClick={() => redirect(button.href)}
              >
                <span>{button.text}</span>
                {button.type === "primary" && (
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                )}
              </button>
            ))}
          </MotionDiv>
        </MotionDiv>
      </div>

      {/* Animation styles remain the same... */}
    </section>
  );
};

export default HeroSection;
