"use client";

import { useState } from "react";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "education":
        return <EducationSection />;
      case "experience":
        return <WorkExperienceSection />;
      case "skills":
        return <SkillsSection />;
      case "projects":
        return <ProjectsSection />;
      default:
        return null;
    }
  };

  return <div className="min-h-screen bg-gray-50">{renderSection()}</div>;
}
