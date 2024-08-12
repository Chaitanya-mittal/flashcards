const db = require("../db/index");

const Flashcard = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM flashcards", (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  },

  findById: (_id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM flashcards WHERE _id = ?",
        [_id],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results[0]);
        }
      );
    });
  },

  create: (flashcardData) => {
    return new Promise((resolve, reject) => {
      const { question, answer } = flashcardData;
      db.query(
        "INSERT INTO flashcards (question, answer) VALUES (?, ?)",
        [question, answer],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results);
        }
      );
    });
  },

  update: (_id, flashcardData) => {
    return new Promise((resolve, reject) => {
      const { question, answer } = flashcardData;
      db.query(
        "UPDATE flashcards SET question = ?, answer = ? WHERE _id = ?",
        [question, answer, _id],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results);
        }
      );
    });
  },

  delete: (_id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM flashcards WHERE _id = ?",
        [_id],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results);
        }
      );
    });
  },
};

module.exports = Flashcard;
