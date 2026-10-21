import React, { useContext } from "react";
import { InterviewContext } from "../context/InterviewContext";

export default function QuestionList() {
  const { questions, deleteQuestion, updateStatus } =
    useContext(InterviewContext);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
        Questions List ({questions.length})
      </h3>

      {questions.length === 0 ? (
        <div className="text-center py-8 text-gray-400 text-sm">
          No questions added yet. Start tracking your prep!
        </div>
      ) : (
        <div className="space-y-3">
          {questions.map((q) => (
            <div
              key={q.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition gap-2"
            >
              <div>
                <h4 className="font-semibold text-gray-800">{q.title}</h4>
                <div className="flex gap-2 mt-1">
                  <span className="text-xs bg-gray-100 px-2.5 py-1 rounded-md text-gray-600 font-medium">
                    {q.category}
                  </span>
                  <span className="text-xs bg-blue-50 px-2.5 py-1 rounded-md text-blue-600 font-medium">
                    {q.difficulty}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <select
                  value={q.status}
                  onChange={(e) => updateStatus(q.id, e.target.value)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium border focus:outline-none ${
                    q.status === "Completed"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : q.status === "In Progress"
                        ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                        : "bg-red-50 text-red-700 border-red-200"
                  }`}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>

                <button
                  onClick={() => deleteQuestion(q.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium px-2 py-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
