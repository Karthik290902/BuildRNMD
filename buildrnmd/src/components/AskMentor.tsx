import React from 'react'

export const AskMentor = () => {
  return (
    <div>
    <div className="text-center py-10 mb-16 bg-gradient-to-br from-orange-50 to-red-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/20 to-red-500/20 rounded-full blur-3xl transform -translate-x-20 translate-y-20" />
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-sm font-semibold mb-6">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
        </svg>
        Mentorship Hub
      </div>
      <h1 className="text-8xl lg:text-8xl font-bold mb-6 mt-4">
        <span className="text-8xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
          Ask a Mentor
        </span>{" "}
        <span className="text-8xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">💬</span>
      </h1>
      <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 mt-20">
        Get{" "}
        <span className="font-semibold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          personalized guidance
        </span>{" "}
        from current healthcare professionals and students! Submit anonymous questions and browse our colorful Q&A archive. 🌈
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-20">
        <button className="px-8 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-4xl flex items-center gap-2">
         
          <span>Answered in 3-5 Days</span>
        </button>
        <button className="px-8 py-2 border-2 bg-white border-orange-500 text-orange-600 font-semibold rounded-4xl flex items-center gap-2">
          <span>Expert Mentors</span>
        </button>
      </div>
          </div>
    
    <div>



      {/* Stay Updated Section */}
      <div className="mt-24 flex justify-center px-4">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border-t-4 border-orange-500 p-8 md:p-12">
          {/* Header with Icon */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
              Stay Updated ✨
            </h2>
          </div>

          {/* Description */}
          <p className="text-center text-gray-600 text-base md:text-lg mb-8">
            Get notified when new questions are answered and receive our{" "}
            <span className="font-semibold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              colorful weekly digest
            </span>{" "}
            of the most helpful Q&As! 💬
          </p>

          {/* Email Input Form */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-gray-100 rounded-2xl border-2 border-transparent focus:border-orange-400 focus:bg-white focus:outline-none transition-all duration-300 text-gray-700"
            />
            <button className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-2xl hover:bg-orange-700 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              <span>Subscribe</span>
            </button>
          </div>

          {/* Privacy Notice */}
          <p className="text-center text-sm text-gray-500 flex items-center justify-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

    </div>

</div>
  )
}
