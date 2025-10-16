import app from "./src/app.js";
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = 3000;


/*
=======

>>>>>>> decc53fa3384a4784d9dd7afaec24721f3a8798c
// Equivalente a __filename em ESM
const __filename = fileURLToPath(import.meta.url);
// Equivalente a __dirname em ESM
const __dirname = path.dirname(__filename);

const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem')),  
}
<<<<<<< HEAD
*/


const caminho = "/opt/bitnami/apache/conf/bitnami/";

const sslOptions = {
  key: fs.readFileSync(path.join(caminho, 'certs', 'server.key')),
  cert: fs.readFileSync(path.join(caminho, 'certs', 'server.crt')),
  ca: fs.readFileSync(path.join(caminho, 'certs', 'www_arptec_xyz.ca-bundle')),
}



/*
const caminhoSSL = "/opt/bitnami/apache/conf/bitnami/certs/";

const sslOptions = {
  key: fs.readFileSync(path.join(caminho, 'ssl', 'server.key')),
  cert: fs.readFileSync(path.join(caminho, 'ssl', 'server.crt')),  
}
*/


const server = https.createServer(sslOptions, app);

server.listen(PORT, () => {
  console.log("servidor escutando!");
});

/*
app.listen(PORT, () => {
  console.log("servidor escutando!");
});
*/

