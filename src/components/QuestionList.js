import React, { useState, useEffect } from "react";
import QuestionItem from './QuestionItem'

function QuestionList({ newQuestion }) {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((res) => res.json())
      .then((questions) => setQuestions(questions))
  }, [])

  useEffect(() => {
    if (newQuestion) {
      setQuestions(prev => {
        const exists = prev.some(q => q.id === newQuestion.id)
        return exists ? prev : [...prev, newQuestion]
      })
    }
  }, [newQuestion])

  const handleDeleteItem = (deletedQuestion) => {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  }

  const handleUpdateQuestion = (updatedQuestion) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions && questions.map((question) => (
        <QuestionItem
          key={question.id}
          id={question.id}
          question={question}
          onDeleteQuestion={handleDeleteItem}
          onUpdateQuestion={handleUpdateQuestion}
        />
      ))}
      </ul>
    </section>
  );
}

export default QuestionList;
