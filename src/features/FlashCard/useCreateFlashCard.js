import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFlashcard } from "../../services/apiFlashcards";
import toast from "react-hot-toast";

function useCreateFlashCard() {
  const queryClient = useQueryClient();
  const { mutate: createCard, isPending: isCreating } = useMutation({
    mutationFn: (flashcard) => createFlashcard(flashcard),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Flashcard created successfully");
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error("Unable to create flashcard");
    },
  });
  return { createCard, isCreating };
}

export default useCreateFlashCard;
