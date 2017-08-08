const fs   = require('fs');
const path = require('path');
const pug  = require('pug');


function render(template, data) {
	console.log(template, data);
	let filename = path.resolve('views', `${template}.pug`);
	data.filename = filename; // for pug extends

	fs.readFile(filename, 'utf-8', (error, template) => {
		if (error) {
			this.writeHead(500, { 'Content-Type': 'text/plain' });
			return this.end(error.message);
		};


		let html = pug.render(template, data);


		this.writeHead(200, { 'Content-Type': 'text/html' });
		this.end(html);
	});
}


module.exports = render;