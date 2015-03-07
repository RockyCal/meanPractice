// app/routes/js

// grab the nerd model we just created

var Nerd = require('./models/nerd');


	module.exports = function(app) {

		// server routes ===========================================================
		// handle things like api calls
		// authentication routes


		// sample api route
		app.get('/api/nerds', function(req, res) {
			Nerd.find(function(err, nerds) {
				// if there is an error retrieving, send error
				//nothing after res.send(err) will execture
				if (err)
					res.send(err);

				res.json(nerds); // return all nerds in json format
		    });
		});

		// frontend routes =========================================================
		// route to handle all angular requests
		app.get('*', function(req, res) {
			res.sendfile('./public/views/index.html');
		});

	};