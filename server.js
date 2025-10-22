import app from "./src/app.js";
import http from 'http';

const PORT = 3000;

const server = http.createServer(app);

app.listen(PORT, () => {
  console.log("servidor escutando!");
});


