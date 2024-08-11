import useDeleteFlashcard from "../../features/FlashCard/useDeleteFlashcard";
import Loader from "../Loader";
import styles from "./ConfirmDelete.module.css";
function ConfirmDelete({ onClick, id }) {
  const { deleteCard, isDeleting } = useDeleteFlashcard();
  if (isDeleting) {
    return <Loader />;
  }
  return (
    <div className={styles.confirmDelete}>
      <h2>Confirm Delete</h2>
      <h4>Are you sure you want to delete this flashcard</h4>
      <div className="buttonBox">
        <button
          className="btn"
          onClick={() => deleteCard(id)}
          disabled={isDeleting}
        >
          Delete
        </button>
        <button className="btn2" onClick={onClick}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
