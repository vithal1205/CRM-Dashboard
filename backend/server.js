const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const data = require("./data.json");

app.get("/crm-data", (req, res) => {
  res.json(data);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
