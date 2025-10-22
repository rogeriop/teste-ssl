import app from "./src/app.js";
import http from 'http';

const PORT = 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}!`);
});


