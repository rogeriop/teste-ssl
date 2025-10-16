import app from "./src/app.js";
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = 3000;

/*
// Equivalente a __filename em ESM
const __filename = fileURLToPath(import.meta.url);
// Equivalente a __dirname em ESM
const __dirname = path.dirname(__filename);

const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem')),  
}
*/


const caminho = "/opt/bitnami/apache/conf/bitnami/";

const sslOptions = {
  key: fs.readFileSync(path.join(caminho, 'certs', 'server.key')),
  cert: fs.readFileSync(path.join(caminho, 'certs', 'server.crt')),
  ca: fs.readFileSync(path.join(caminho, 'certs', 'www_arptec_xyz.ca-bundle')),
}


const server = https.createServer(sslOptions, app);

server.listen(PORT, () => {
  console.log("servidor escutando!");
});

/*
app.listen(PORT, () => {
  console.log("servidor escutando!");
});
*/

