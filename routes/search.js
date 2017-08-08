const url = require('url');

const omdb = require('../lib/omdb');


function search(req, res) {
	const parsedUrl = url.parse(req.url, true);
	const title = parsedUrl.query.title;

	console.log(title);
	
	omdb.get(title, (error, data) => {
		if (error) {
			return res.render('error', { error: error.message })
		};

		let movieData = {
			title: 	 		data.Title,
			year: 	 		data.Year,
			runtime: 		data.Runtime,
			genre:			data.Genre,
			rating:			parseFloat(data.imdbRating),
			description: 	data.Plot,
			director:		data.Director,
			writer:			data.Writer,
			actors:			data.Actors,
			poster:			data.Poster,
		};

		res.render('movie', movieData);
	});
}

module.exports = search;