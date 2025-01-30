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

//adding a route to READ from the database.

app.get("/messages", async (req, res) => {
  const result = await db.query(`SELECT * FROM enterTableName`);
  await res.json(result.rows);
});

//adding a route to CREATE NEW data in the databse and extracting name and message from the enterTableName

app.post("/new-data", async (req, res) => {
  const data = req.body.formValues;
  console.log("This is the req.body", req.body);
  const query = await db.query(
    `INSERT INTO enterTableName (name, message) VALUES ($1, $2)`,
    [data.name, data.message]
  );
  await res.json(query.rows);
});
