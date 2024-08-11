import Modal from "../../ui/Modal";
import CreateFlashCard from "../../features/FlashCard/CreateFlashCard";
import FlashCardList from "../../features/FlashCard/FlashCardList";

import useFlashcards from "../../features/FlashCard/useFlashcards";
import Loader from "../../ui/Loader";

function Dashboard() {
  //   const { flashcards = [], loadingFlashcards } = useFlashcards();
  //   if (loadingFlashcards) {
  //     return <Loader />;
  //   }

  const flashcards = [];
  return (
    <section className="main">
      <Modal>
        <Modal.Button opens="createFlashCard">
          <button className="btn2">Create</button>
        </Modal.Button>
        <Modal.Window name="createFlashCard">
          <CreateFlashCard />
        </Modal.Window>
      </Modal>

      <FlashCardList data={flashcards} />
    </section>
  );
}

export default Dashboard;
