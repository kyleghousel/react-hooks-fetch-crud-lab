import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [newQuestion, setNewQuestion] = useState(null)

  const handleAddQuestion = (question) => {
    setPage("List")
    setNewQuestion(question)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList newQuestion={newQuestion}/>}
    </main>
  );
}

export default App;
