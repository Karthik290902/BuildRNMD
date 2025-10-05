import React from 'react';

type ColorOption = 'pink' | 'blue' | 'teal' | 'purple';

interface Career {
  name: string;
  color: ColorOption;
  education: string;
  time: string;
  salary: string;
  demand: string;
}

const careers: Career[] = [
  {
    name: "Registered Nurse (RN)",
    color: "pink",
    education: "4-year Bachelor's Degree",
    time: "4 years",
    salary: "$65,000 - $85,000",
    demand: "High"
  },
  {
    name: "Medical Doctor (MD)",
    color: "blue",
    education: "4-year undergrad + 4-year medical school + residency",
    time: "8+ years",
    salary: "$200,000 - $400,000+",
    demand: "High"
  },
  {
    name: "Licensed Practical Nurse (LPN)",
    color: "teal",
    education: "1-2 year Diploma",
    time: "1-2 years",
    salary: "$45,000 - $55,000",
    demand: "High"
  },
  {
    name: "Nurse Practitioner (NP)",
    color: "purple",
    education: "Master's degree + experience",
    time: "6-8 years",
    salary: "$90,000 - $120,000",
    demand: "High"
  }
];

const getColorClasses = (color: ColorOption) => {
  const colors: Record<ColorOption, string> = {
    pink: "bg-pink-500",
    blue: "bg-blue-500",
    teal: "bg-teal-500",
    purple: "bg-purple-500"
  };
  return colors[color];
};

const getTextColorClasses = (color: ColorOption) => {
  const colors: Record<ColorOption, string> = {
    pink: "text-pink-600",
    blue: "text-blue-600",
    teal: "text-teal-600",
    purple: "text-purple-600"
  };
  return colors[color]
};

export const CareerComparisonSection = () => {
  return (
    <div className="py-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Quick Comparison Tool
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-purple-600">Compare Healthcare Careers</span> 📊
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how different healthcare professions stack up with our{' '}
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              colorful comparison chart
            </span>
            !<br />
            Perfect for quick decision-making. 🎯
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-transparent">
          {/* Top gradient */}
          <div className="h-2 w-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left px-6 py-5 font-bold text-gray-900 text-base">Career Path</th>
                  <th className="text-left px-6 py-5 font-bold text-gray-900 text-base">Education Required</th>
                  <th className="text-left px-6 py-5 font-bold text-gray-900 text-base">Time Commitment</th>
                  <th className="text-left px-6 py-5 font-bold text-gray-900 text-base">Avg. Salary (NL)</th>
                  <th className="text-left px-6 py-5 font-bold text-gray-900 text-base">Demand Level</th>
                </tr>
              </thead>
              <tbody>
                {careers.map((career, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${getColorClasses(career.color)}`}></div>
                        <span className="font-semibold text-gray-900">{career.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-gray-600">{career.education}</td>
                    <td className="px-6 py-5">
                      <span className={`${getTextColorClasses(career.color)} font-semibold`}>{career.time}</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-bold text-green-600">{career.salary}</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                        </svg>
                        {career.demand}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Button */}
          <div className="px-6 py-8 bg-gray-50 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span>View Full Comparison Chart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
