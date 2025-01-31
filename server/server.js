//Import packages
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

//Initiliase express
const app = express();

//Telling server to use JSON
app.use(express.json());

//Start cors
app.use(cors());

//configure env file
dotenv.config();

//hosting server on a dynamic port using environment variable, or default to 8080

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//setting up root route in server

app.get("/", function (request, response) {
  response.json({ message: "This is the root route" });
});

//creating db pool
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

//adding a route to READ  from the database.

app.get("/messages", async (req, res) => {
  const result = await db.query(`SELECT * FROM wedding`);
  await res.json(result.rows);
});

//adding a route to READ messages from family in the database
app.get("/familyMessages", async (req, res) => {
  const result = await db.query(
    `SELECT * FROM wedding WHERE relationship = 'Family';`
  );
  await res.json(result.rows);
});

//adding a route to READ messages from friends in the database
app.get("/friendsMessages", async (req, res) => {
  const result = await db.query(
    `SELECT * FROM wedding WHERE relationship = 'Friend';`
  );
  await res.json(result.rows);
});

//adding a route to CREATE NEW data in the databse and extracting name, relationship and message from the wedding table

app.post("/new-data", async (req, res) => {
  const { name, relationship, message } = req.body;
  console.log("This is the req.body", req.body);

  const query = await db.query(
    `INSERT INTO wedding (name, relationship, message) VALUES ($1, $2, $3)`,
    [name, relationship, message]
  );

  await res.json(query.rows);
});
