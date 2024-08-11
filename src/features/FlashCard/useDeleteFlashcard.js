import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFlashcard } from "../../services/apiFlashcards";
import toast from "react-hot-toast";

function useDeleteFlashcard() {
  const queryClient = useQueryClient();
  const { mutate: deleteCard, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteFlashcard(id),
    onSuccess: () => {
      toast.success("Flashcard deleted successfully");
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error("Unable to delete flashcard");
      queryClient.invalidateQueries({ active: true });
    },
  });
  return { deleteCard, isDeleting };
}

export default useDeleteFlashcard;
