import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFlashcard, updateFlashcard } from "../../services/apiFlashcards";
import toast from "react-hot-toast";

function useUpdateFlashCard() {
  const queryClient = useQueryClient();
  const { mutate: updateCard, isPending: isUpdating } = useMutation({
    mutationFn: ({ newData, id }) => updateFlashcard({ newData, id }),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Flashcard updated successfully");
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error("Unable to update flashcard");
    },
  });
  return { updateCard, isUpdating };
}

export default useUpdateFlashCard;
