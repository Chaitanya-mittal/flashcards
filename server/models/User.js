const db = require("../db/index");

const User = {
  findByEmail: (email) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results[0]);
        }
      );
    });
  },
  findById: (_id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE _id = ?", [_id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results[0]);
      });
    });
  },

  create: (userData) => {
    return new Promise((resolve, reject) => {
      let { name, email, type, password } = userData;

      db.query(
        "INSERT INTO users (name, email, type, password) VALUES (?, ?, ?, ?)",
        [name, email, type, password],
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

module.exports = User;
