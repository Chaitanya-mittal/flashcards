const express = require("express");
const router = express.Router();
const Flashcard = require("../models/FlashCards");

// Route to get all flashcards
router.get("/", async (req, res) => {
  try {
    const flashcards = await Flashcard.findAll();
    res.json(flashcards);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve flashcards" });
  }
});

// Route to get a flashcard by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const flashcard = await Flashcard.findById(Number(id));
    if (!flashcard) {
      return res.status(404).json({ error: "Flashcard not found" });
    }
    res.json(flashcard);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve flashcard" });
  }
});

// Route to create a new flashcard
router.post("/", async (req, res) => {
  const flashcardData = req.body;
  try {
    const flashcardId = await Flashcard.create(flashcardData);
    res.status(201).json({ id: flashcardId });
  } catch (err) {
    res.status(500).json({ error: "Failed to create flashcard" });
  }
});

// Route to update an existing flashcard
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const flashcardData = req.body;
  try {
    await Flashcard.update(Number(id), flashcardData);
    res.json({ message: "Flashcard updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update flashcard" });
  }
});

// Route to delete a flashcard
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Flashcard.delete(id);
    res.json({ message: "Flashcard deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete flashcard" });
  }
});

module.exports = router;
