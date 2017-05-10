/**
 * PlatoController
 *
 * @description :: Server-side logic for managing platoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	hello: function (req, res) {
  		return res.send('Hi there!');
	},

	bye: function(req, res) {
		return res.redirect('www.google.cl');
	}
};

