module.exports = function home(req, res) {
	res.render('index', { title: 'TMDB Movie search' });
};