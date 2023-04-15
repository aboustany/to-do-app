const http = require("http");
const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 60555;

const app = express();
app.use(bodyParser.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://myuser:@localhost/mydb",
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/todos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM todos");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while fetching todos" });
  }
});

app.post("/api/todos", async (req, res) => {
  try {
    const text = req.body.text;
    const result = await pool.query("INSERT INTO todos (text) VALUES ($1) RETURNING *", [text]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while adding a todo" });
  }
});

app.delete("/api/todos/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const result = await pool.query("DELETE FROM todos WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Todo not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while deleting a todo" });
    }
  });
  

  const server = http.createServer(app);

  //find available port
  server.listen(0, () => {
    const PORT = server.address().port;
    console.log(`Server started on ${PORT}`);
  });
  

