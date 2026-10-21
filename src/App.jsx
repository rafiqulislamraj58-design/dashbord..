import React, { useContext } from "react";
import { InterviewContext } from "./context/InterviewContext";
import StatCard from "./components/StatCard";
import ProgressBar from "./components/ProgressBar";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";

export default function App() {
  const { questions } = useContext(InterviewContext);

  const totalQuestions = questions.length;
  const dsaCompleted = questions.filter(
    (q) => q.category === "DSA" && q.status === "Completed",
  ).length;
  const techCompleted = questions.filter(
    (q) => q.category === "Technical" && q.status === "Completed",
  ).length;
  const machineCodingStatus = "In Progress";

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b pb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Interview Practice Tracker
            </h1>
            <p className="text-sm text-gray-500">
              Track your weekly DSA, Git, and Technical prep progress[cite: 1,
              4].
            </p>
          </div>
        </header>

  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard title="Total Questions" value={totalQuestions} />
          <StatCard title="DSA Completed" value={dsaCompleted} />
          <StatCard title="Technical Completed" value={techCompleted} />
          <StatCard title="Machine Coding" value={machineCodingStatus} />
        </div>

        <ProgressBar />

        <QuestionForm />

        <QuestionList />
      </div>
    </div>
  );
}
