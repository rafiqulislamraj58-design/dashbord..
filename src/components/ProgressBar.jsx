import React, { useContext } from "react";
import { InterviewContext } from "../context/InterviewContext";

export default function ProgressBar() {
  const { questions } = useContext(InterviewContext);

  const total = questions.length;
  const completed = questions.filter((q) => q.status === "Completed").length;

  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 space-y-2">
      <div className="flex justify-between items-center text-sm font-semibold text-gray-700">
        <span>
          Overall Completion Progress ({completed}/{total} Completed)
        </span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
        <div
          className="bg-indigo-600 h-full rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
