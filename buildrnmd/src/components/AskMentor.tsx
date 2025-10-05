import React from 'react'

export const AskMentor = () => {
  return (
    <div>
      {/* Stay Updated Section */}
      <div className="mt-24 flex justify-center px-4">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border-t-4 border-purple-500 p-8 md:p-12">
          {/* Header with Icon */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600">
              Stay Updated ✨
            </h2>
          </div>

          {/* Description */}
          <p className="text-center text-gray-600 text-base md:text-lg mb-8">
            Get notified when new questions are answered and receive our{" "}
            <span className="font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              colorful weekly digest
            </span>{" "}
            of the most helpful Q&As! 💬
          </p>

          {/* Email Input Form */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-gray-100 rounded-2xl border-2 border-transparent focus:border-purple-400 focus:bg-white focus:outline-none transition-all duration-300 text-gray-700"
            />
            <button className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-2xl hover:bg-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
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
  )
}
