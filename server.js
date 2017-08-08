const http = require('http');
const port = 6060;

const render = require('./lib/render');
const { public, home, search, notFound } = require('./routes');

http.ServerResponse.prototype.render = render;


http.createServer((req, res) => {
	if (req.url.match(/\.(html|css|js|png|jpg|svg|gif)$/)) {
		public(req, res);

	} else if (req.url === '/') {
		home(req, res);

	} else if (req.url.startsWith('/search')) {
		search(req, res);

	} else {
		notFound(req, res);
	}

}).listen(port, () => console.log(`Server listening on port ${port}`));