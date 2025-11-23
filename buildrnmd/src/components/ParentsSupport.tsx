import React from "react";

export const ParentsSupport = () => {
  return (
    <div className="text-center py-10 mb-16 bg-gradient-to-br from-green-50 via-emerald-200 to-teal-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl transform -translate-x-20 translate-y-20" />

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white border-0 text-sm font-semibold mb-6">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
        </svg>
        Family Support Hub
      </div>
      <h1 className="text-8xl lg:text-7xl font-bold mb-6 mt-4">
        <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          Parents and Supporters Guide
        </span>{" "}
        <span className="text-8xl">💚</span>
      </h1>
      <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 mt-20">
        Supporting your teen&apos;s healthcare career journey requires understanding
        the pathways, timelines, and challenges ahead. We&apos;re here to help you{" "}
        <span className="font-semibold bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
          navigate this colorful journey together!
        </span>{" "}
        🌟
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-20">
        <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
  <path fillRule="evenodd" d="M3 14a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM10 2a1 1 0 00-1 1v8.586l-3.293-3.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414L11 11.586V3a1 1 0 00-1-1z" clipRule="evenodd"/>
</svg>

          <span>Download Parent Guide</span>
        </button>
        <button className="px-8 py-4 border-2 bg-white border-green-500 text-green-600 font-semibold rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            />
          </svg>
          <span>Join Parent Community</span>
        </button>
      </div>
    </div>
  );
};
