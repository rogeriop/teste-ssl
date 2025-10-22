import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const livros = [
  { id: 1, nome: "O senhor dos aneis" },
  { id: 2, nome: "O hobbit" },
  { id: 3, nome: "A revolucao dos bichos" },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Express API");
});  

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
})

export default app;