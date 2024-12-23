import express from "express";
import { movieData } from "./domyData.js";
import multer from "multer";
import cors from 'cors';

const app = express();
const port = 3000;
const upload = multer();

app.use(express.json());


app.use(cors());



app.post("/random-movie", upload.array("files", 5), (req, res) => {
  const randomMovie = movieData[Math.floor(Math.random() * movieData.length)];
  res.json(randomMovie);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});