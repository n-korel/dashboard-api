import express from 'express';

const port = 8000;
const app = express();

app.get('/hello', (req, res) => {
		// res.type('application/json');
		// res.send('хэй ник');
		res.end();
	});

app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`);
}) 

/* 
const server = http.createServer((req, res) => {
	switch (req.method) {
		case 'GET':
			switch (req.url) {
				case '/hello':
					res.statusCode = 200;
					res.setHeader('Content-Type', 'text/plain');
					res.end('Привет!');
					break;
			}
			break;
	}
});

server.listen(port, host, () => {
});
 */