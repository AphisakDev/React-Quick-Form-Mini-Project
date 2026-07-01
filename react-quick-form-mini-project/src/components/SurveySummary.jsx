// Component to display the survey submission summary
import React from 'react';

const SurveySummary = ({ formData, movies, onRestart }) => {
  // Find the selected movie details
  const selectedMovie = movies.find((m) => m.title === formData.movie);

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center pb-4 border-b border-gray-800/80">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 mb-3 shadow-inner">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-1.5">ส่งแบบสำรวจสำเร็จ!</h2>
        <p className="text-gray-400 text-sm">ขอบคุณสำหรับการสละเวลาทำแบบสำรวจภาพยนตร์</p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">ข้อมูลผู้ส่งแบบสำรวจ</h3>
          <div className="bg-gray-900/40 border border-gray-800/60 rounded-xl p-4 space-y-2.5">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">ชื่อ:</span>
              <span className="text-white font-medium">{formData.name}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">อีเมล:</span>
              <span className="text-white font-medium break-all">{formData.email}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">ภาพยนตร์ที่ชื่นชอบ</h3>
          {selectedMovie ? (
            <div className="bg-indigo-600/5 border border-indigo-500/20 rounded-xl p-4 space-y-2.5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">ภาพยนตร์:</span>
                <span className="text-indigo-400 font-bold">{selectedMovie.title}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">ปีที่ฉาย:</span>
                <span className="text-white font-medium">{selectedMovie.year}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">ผู้กำกับ:</span>
                <span className="text-white font-medium">{selectedMovie.director}</span>
              </div>
            </div>
          ) : (
            <div className="bg-gray-900/40 border border-gray-800/60 rounded-xl p-4 text-center text-sm text-gray-400">
              — ไม่พบข้อมูลภาพยนตร์ —
            </div>
          )}
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">ความคิดเห็นเพิ่มเติม</h3>
          <div className="bg-gray-900/40 border border-gray-800/60 rounded-xl p-4 min-h-[70px]">
            <p className="text-gray-300 text-sm whitespace-pre-wrap leading-relaxed">
              {formData.comment && formData.comment.trim() ? formData.comment : "— ไม่มีรายละเอียดเพิ่มเติม —"}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="button"
          onClick={onRestart}
          className="w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500/50 shadow-lg shadow-indigo-600/20 transition-all duration-200 cursor-pointer text-center"
        >
          เริ่มทำแบบสำรวจใหม่
        </button>
      </div>
    </div>
  );
};

export default SurveySummary;
