"use client";
import EducationTimeline from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  console.log(process.env.RESEND_API_KEY);
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection />
      <Project />
      <SkillSection />
      <EducationTimeline />
      <ContactForm />
      <Footer />
    </main>
  );
}
