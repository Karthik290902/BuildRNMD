import React, { useState } from "react";
import {CareerComparisonSection} from "./CareerComparisonSection";

type ColorOption = "pink" | "blue" | "teal" | "purple" | "orange" | "red";

interface CareerCardProps {
  title: string;
  description: string;
  education: string;
  salary: string;
  duration: string;
  durationColor?: ColorOption;
  highDemand?: boolean;
  keyTraits?: string[];
  borderColor?: ColorOption;
  buttonColor?: ColorOption;
  image: string;
}

interface ColorStyles {
  border: string;
  duration: string;
  button: string;
  educationBg: string;
  educationText: string;
}


// Reusable Career Card
const CareerCard: React.FC<CareerCardProps> = ({
  title,
  description,
  education,
  salary,
  duration,
  durationColor = "pink",
  highDemand = false,
  keyTraits = [],
  borderColor = "pink",
  buttonColor = "pink",
  image,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const colorClasses: Record<ColorOption, ColorStyles> = {
    pink: {
      border: "border-pink-400",
      duration: "bg-pink-500",
      button: "bg-pink-500 hover:bg-pink-600",
      educationBg: "bg-pink-50",
      educationText: "text-pink-700",
    },
    blue: {
      border: "border-blue-400",
      duration: "bg-blue-500",
      button: "bg-blue-500 hover:bg-blue-600",
      educationBg: "bg-blue-50",
      educationText: "text-blue-700",
    },
    teal: {
      border: "border-teal-400",
      duration: "bg-teal-500",
      button: "bg-teal-500 hover:bg-teal-600",
      educationBg: "bg-teal-50",
      educationText: "text-teal-700",
    },
    purple: {
      border: "border-purple-400",
      duration: "bg-purple-500",
      button: "bg-purple-500 hover:bg-purple-600",
      educationBg: "bg-purple-50",
      educationText: "text-purple-700",
    },
    orange: {
      border: "border-orange-400",
      duration: "bg-orange-500",
      button: "bg-orange-500 hover:bg-orange-600",
      educationBg: "bg-orange-50",
      educationText: "text-orange-700",
    },
    red: {
      border: "border-red-400",
      duration: "bg-red-500",
      button: "bg-red-500 hover:bg-red-600",
      educationBg: "bg-red-50",
      educationText: "text-red-700",
    },
  };

  const colors = colorClasses[borderColor];

  

  return (
    <div
      className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 ${colors.border}`}
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <span
            className={`${colors.duration} text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {duration}
          </span>
        </div>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-md"
        >
          <svg
            className={`w-6 h-6 ${
              isFavorite ? "text-red-500 fill-current" : "text-gray-400"
            }`}
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {description}
        </p>

        {/* Education */}
        <div
          className={`${colors.educationBg} rounded-xl p-4 mb-4 flex items-start gap-3`}
        >
          <svg
            className={`w-5 h-5 ${colors.educationText} flex-shrink-0 mt-0.5`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          <span className={`text-sm ${colors.educationText} font-medium`}>
            {education}
          </span>
        </div>

        {/* Salary & Demand */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-green-600 font-bold">{salary}</span>
          {highDemand && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              High Demand
            </span>
          )}
        </div>

        {/* Key Traits */}
        {keyTraits.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {keyTraits.map((trait, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {trait}
              </span>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <button
          className={`w-full ${colors.button} text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105`}
        >
          Explore This Path
        </button>
      </div>
    </div>
  );
};

// Main Careers Section
const ExploreCareers: React.FC = () => {
  const careers: CareerCardProps[] = [
    {
      title: "Registered Nurse (RN)",
      description:
        "Provide direct patient care, administer medications, and coordinate treatment plans.",
      education: "4-year Bachelor's Degree",
      salary: "$65,000 - $85,000",
      duration: "4 years",
      durationColor: "pink",
      highDemand: true,
      keyTraits: ["Compassionate", "Detail-oriented", "Good communicator"],
      borderColor: "pink",
      buttonColor: "pink",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80",
    },
    {
      title: "Medical Doctor (MD)",
      description:
        "Diagnose and treat medical conditions, perform procedures, and manage patient care.",
      education: "4-year undergrad + 4-year medical school + residency",
      salary: "$200,000 - $400,000+",
      duration: "8+ years",
      durationColor: "blue",
      highDemand: true,
      keyTraits: ["Analytical", "Dedicated", "Strong problem-solver"],
      borderColor: "blue",
      buttonColor: "blue",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    },
    {
      title: "Licensed Practical Nurse (LPN)",
      description:
        "Provide basic patient care under supervision of RNs and doctors.",
      education: "1-2 year Diploma",
      salary: "$45,000 - $55,000",
      duration: "1-2 years",
      durationColor: "teal",
      highDemand: true,
      keyTraits: ["Caring", "Reliable", "Quick learner"],
      borderColor: "teal",
      buttonColor: "teal",
      image:
        "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80",
    },
    {
      title: "Pharmacist",
      description:
        "Dispense medications, provide drug information, and counsel patients on proper medication use.",
      education: "6-8 years",
      salary: "$90,000 - $120,000",
      duration: "6-8 years",
      durationColor: "purple",
      highDemand: true,
      keyTraits: ["Precise", "Scientific", "Patient-focused"],
      borderColor: "purple",
      buttonColor: "purple",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80",
    },
    {
      title: "Physiotherapist",
      description:
        "Help patients recover mobility and manage pain through physical rehabilitation techniques.",
      education: "6 years",
      salary: "$65,000 - $90,000",
      duration: "6 years",
      durationColor: "orange",
      highDemand: true,
      keyTraits: ["Motivational", "Hands-on", "Empathetic"],
      borderColor: "orange",
      buttonColor: "orange",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    },
    {
      title: "Dental Hygienist",
      description:
        "Provide preventive dental care, clean teeth, and educate patients on oral health.",
      education: "2 years",
      salary: "$60,000 - $80,000",
      duration: "2 years",
      durationColor: "red",
      highDemand: false,
      keyTraits: ["Detail-focused", "Friendly", "Health-conscious"],
      borderColor: "red",
      buttonColor: "red",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    },
  ];

  return (
    <div>
      <div className="mb-16">
        {/* Hero Section */}
        <div className="text-center py-10 mb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
            </svg>
            Career Discovery Hub
          </div>
          <h1 className="text-8xl lg:text-7xl font-bold mb-6 mt-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Explore Healthcare Careers
            </span>{" "}
            <span className="text-8xl">✨</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 mt-20">
            Discover the{" "}
            <span className="font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              colorful world
            </span>{" "}
            of healthcare professions! Learn about education requirements,
            salary expectations, and what makes each career uniquely amazing. 🌈
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-20">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Take Career Quiz</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Career Pathway Guide</span>
            </button>
          </div>
        </div>

        {/* Career Paths Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-3 mt-20">
            <span className="text-indigo-600">Healthcare Career Paths</span> 🎯
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Each career is color-coded to help you visualize different pathways
            and requirements!
          </p>
        </div>

        {/* Career Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
          {careers.map((career, index) => (
            <CareerCard key={index} {...career} />
          ))}
        </div>
      </div>
      <CareerComparisonSection/>
    </div>
  );
};

export default ExploreCareers;
