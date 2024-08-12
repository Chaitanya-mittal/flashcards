const express = require("express");
const app = express();

require("./db/index");
app.use(express.json());
app.use("/api/users", require("./routes/user"));
app.use("/api/flashcards", require("./routes/flashcards"));

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
