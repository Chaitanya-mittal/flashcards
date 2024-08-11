import { useQuery } from "@tanstack/react-query";
import { getFlashCards } from "../../services/apiFlashcards";
export default function useFlashcards() {
  const { data: flashcards, isPending: loadingFlashcards } = useQuery({
    queryKey: ["flashcards"],
    queryFn: getFlashCards,
  });
  return { flashcards, loadingFlashcards };
}
