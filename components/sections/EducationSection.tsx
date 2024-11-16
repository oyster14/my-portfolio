import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      school: "New York University",
      degree: "Master of Science in Computer Science",
      period: "Jan 2023 – Dec 2024 (expected)",
      gpa: "3.9/4.0",
      topics: [
        "Back-End Development",
        "Full Stack Development",
        "Distributed Systems",
        "Cloud Computing",
      ],
      courses: [
        "Distributed Systems",
        "Operating Systems",
        "Database Systems",
        "DevOps and Agile Methodologies",
        "Big Data Development",
        "Cloud and Machine Learning",
        "Graphics Processing Units (GPUs)",
      ],
    },
    {
      school: "Sichuan University",
      degree: "Master of Engineering in Solid Mechanics",
      period: "Sep 2018 – Jun 2021",
      gpa: "3.7/4.0",
      topics: [
        "Scientific Computing",
        "Biomedical Engineering",
        "Medical devices",
      ],
    },
    {
      school: "Sichuan University",
      degree: "Bachelor of Engineering in Engineering Mechanics",
      period: "Sep 2014 – Jun 2018",
      gpa: "3.5/4.0",
    },
  ];

  return (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <Card
          key={index}
          className="hover:shadow-lg transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-[2fr,1fr] gap-6">
              {/* Left Column - Main Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                  <GraduationCap className="h-6 w-6 text-blue-500" />
                  {edu.school}
                </div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {edu.degree}
                </h3>
                {edu.topics && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-700">Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {edu.courses && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-700">Key Courses:</h4>
                    <div className="grid grid-cols-2 gap-2 text-gray-600">
                      {edu.courses.map((course, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Additional Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  {edu.period}
                </div>
                {edu.gpa && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award className="h-4 w-4" />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EducationSection;
