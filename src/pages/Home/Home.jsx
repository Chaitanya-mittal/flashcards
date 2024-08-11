import useFlashcards from "../../features/FlashCard/useFlashcards";
import Empty from "../../ui/Empty";
import Flipcard from "../../ui/Flipcard";
import Loader from "../../ui/Loader";
import styles from "./Home.module.css";
import { useState } from "react";
function Home() {
  const { flashcards = [], loadingFlashcards } = useFlashcards();
  const [currIndex, setCurrIndex] = useState(0);
  if (loadingFlashcards) {
    return <Loader />;
  }
  if (flashcards.length === 0) {
    return <Empty resource="flashcards" />;
  }
  return (
    <div className={styles.home}>
      <div className="buttonBox">
        {currIndex > 0 && (
          <button
            disabled={currIndex === 0}
            className="btn"
            onClick={() =>
              setCurrIndex((curr) => (curr === 0 ? curr : curr - 1))
            }
          >
            Previous
          </button>
        )}
        {currIndex < flashcards.length - 1 && (
          <button
            className="btn"
            onClick={() =>
              setCurrIndex((curr) =>
                curr === flashcards.length - 1 ? curr : curr + 1
              )
            }
          >
            Next
          </button>
        )}
      </div>
      <div className={styles.playzone}>
        <Flipcard data={flashcards.at(currIndex)} index={currIndex} />
      </div>
    </div>
  );
}

export default Home;
