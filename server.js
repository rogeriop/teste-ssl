import app from "./src/app.js";
import http from 'http';
import cors from 'cors';

app.use(cors());

const PORT = 3000;

const server = http.createServer(app);

app.listen(PORT, () => {
  console.log("servidor escutando!");
});


