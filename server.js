import app from "./src/app.js";
import http from 'http';

const AMBIENTE = process.env.AMBIENTE || 'DESEN';

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Ambiente: ${AMBIENTE}`);
  console.log(`Servidor escutando na porta ${PORT}!`);
});


