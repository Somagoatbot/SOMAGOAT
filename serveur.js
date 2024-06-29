const http = require('http');
const childProcess = require('child_process');

const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('BOT EN LIGNE\n');

    const child = childProcess.spawn('node', ['index.js']);
});

server.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
