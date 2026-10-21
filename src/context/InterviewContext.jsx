import React, { createContext, useState, useEffect } from "react";
import initialQuestions from "../data/initialQuestions";

export const InterviewContext = createContext();

export function InterviewProvider({ children }) {
  const [questions, setQuestions] = useState(() => {
    const saved = localStorage.getItem("interview_questions");
    return saved ? JSON.parse(saved) : initialQuestions;
  });

  useEffect(() => {
    localStorage.setItem("interview_questions", JSON.stringify(questions));
  }, [questions]);

  const addQuestion = (newQ) => {
    setQuestions([{ id: Date.now(), ...newQ }, ...questions]);
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const updateStatus = (id, status) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, status } : q)));
  };

  return (
    <InterviewContext.Provider
      value={{ questions, addQuestion, deleteQuestion, updateStatus }}
    >
      {children}
    </InterviewContext.Provider>
  );
}
