import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static("../../front-end/dist"));

app.get("*", (request, response) => {
  response.sendFile("../../front-end/dist/index.html");
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
