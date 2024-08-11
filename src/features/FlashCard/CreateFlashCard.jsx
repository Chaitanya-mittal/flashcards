import { useState } from "react";
import useCreateFlashCard from "./useCreateFlashCard";
import Loader from "../../ui/Loader";
import useUpdateFlashCard from "./useUpdateFlashCard";

function CreateFlashCard({ data, editSession, onClick }) {
  const { createCard, isCreating } = useCreateFlashCard();
  const { updateCard, isUpdating } = useUpdateFlashCard();
  const [question, setQuestion] = useState(() => {
    if (editSession) {
      return data.question;
    }
    return "";
  });
  const [answer, setAnswer] = useState(() => {
    if (editSession) {
      return data.answer;
    }
    return "";
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newCard = {
      question,
      answer,
    };
    if (editSession) {
      updateCard(
        { newData: newCard, id: data.id },
        {
          onSuccess: onClick,
          onError: onClick,
        }
      );
    } else {
      createCard(newCard, {
        onSuccess: onClick,
        onError: onClick,
      });
    }
  }

  if (isCreating || isUpdating) return <Loader />;

  return (
    <form className="flashForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="question">Question</label>
        <textarea
          rows={3}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="answer">Answer</label>
        <textarea
          rows={5}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>

      <button type="submit" className="btn" onClick={handleSubmit}>
        {editSession ? "Update" : "Create"}
      </button>
    </form>
  );
}

export default CreateFlashCard;
