import supabase from "./supabase";

export async function getFlashCards() {
  let { data: flashcards, error } = await supabase
    .from("flashcards")
    .select("*");
  if (error) {
    throw new Error("unable to fetch flashcards");
    return;
  }
  console.log(flashcards);
  return flashcards;
}

export async function createFlashcard(flashcard) {
  console.log(flashcard);
  const { data, error } = await supabase
    .from("flashcards")
    .insert(flashcard)
    .select("*");
  if (error) {
    throw new Error("unable to create flashcard");
    return;
  }
  return data;
}

export async function deleteFlashcard(id) {
  const { error } = await supabase.from("flashcards").delete().eq("id", id);
  if (error) {
    throw new Error("unable to delete flashcard");
    return;
  }
  return id;
}

export async function updateFlashcard({ newData, id }) {
  const { error } = await supabase
    .from("flashcards")
    .update(newData)
    .eq("id", id);

  if (error) {
    throw new Error("unable to delete flashcard");
    return;
  }
  return id;
}
