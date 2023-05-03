const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 3000

// создаем слушатель на запросы к серверу
const requestListener = (req, res) => {
	const readbleStream = fs.createReadStream(path.resolve(__dirname, 'db.json'))

	if (req.method === 'GET') {
		try {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', 'GET');
			res.setHeader('Access-Control-Max-Age', 2592000);
			console.log('requestURL:', req.url)
			readbleStream.pipe(res)
		}
		catch (error) {
			res.writeHead(404, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ message: error }));
		}
	}
}

// создаем сервер, передаем в него слушатель запросов
const server = http.createServer(requestListener);
server.listen(PORT, () => {
	console.log('db.json is ready to use')
	console.log(`Server started at http://localhost:${PORT}`);
});

