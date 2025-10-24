import 'dotenv/config';
import app from "./src/app.js";
import http from 'http';

const PORT = process.env.PORT || 3030;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}!`);
});


