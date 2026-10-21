import React, { useState, useContext } from "react";
import { InterviewContext } from "../context/InterviewContext";

export default function QuestionForm() {
  const { addQuestion } = useContext(InterviewContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("DSA");
  const [difficulty, setDifficulty] = useState("Easy");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a question title!");
      return;
    }

    addQuestion({
      title,
      category,
      difficulty,
      status,
    });

    setTitle("");
    setCategory("DSA");
    setDifficulty("Easy");
    setStatus("Pending");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Add New Question
      </h2>

      <form
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="md:col-span-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Question Title (e.g., Two Sum / Event Loop)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
        </div>

        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
          >
            <option value="DSA">DSA</option>
            <option value="Git">Git & GitHub</option>
            <option value="Technical">Full-Stack Technical</option>
          </select>
        </div>

        <div>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition text-sm"
          >
            Add Question
          </button>
        </div>
      </form>
    </div>
  );
}
