/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getConcursantes: function(req, res) {
        MainService.getConcursantes(function(todos) {
            res.json(todos)
        })
	},
    getPlatos: function(req, res) {
        MainService.getPlatos(function(todos) {
            res.json(todos)
        })
	},
    getRondas: function(req, res) {
        MainService.getRondas(function(todos) {
            res.json(todos)
        })
	},
    getIngredientes: function(req, res) {
        MainService.getIngredientes(function(todos) {
            res.json(todos)
        })
	},
  oneConcursante: function (req, res) {
	    Concursante.findOne({ id: req.params.id }).exec(function (err, user) {
	      if(err) return res.json({ err: err }, 500);
	      else res.json(user);
	    });
	},
  onePlato: function (req, res) {
	    Plato.findOne({ id: req.params.id }).exec(function (err, user) {
	      if(err) return res.json({ err: err }, 500);
	      else res.json(user);
	    });
	},

  detallePlato: function (req, res) {
        Plato_tiene_ingredientes.find({ Plat: req.params.id }).exec(function (err, detallePlato) {
            if(err) return res.json({ err: err}, 500);
            else res.json(detallePlato);
        });
  },

  oneIngrediente: function (req, res) {
	    Ingredientes.findOne({ id: req.params.id }).exec(function (err, user) {
	      if(err) return res.json({ err: err }, 500);
	      else res.json(user);
	    });
	},
  oneRonda: function (req, res) {
	    Ronda.findOne({ id: req.params.id }).exec(function (err, user) {
	      if(err) return res.json({ err: err }, 500);
	      else res.json(user);
	    });
	},
  eliminar: function (req, res, next) {

        var date;
		date = new Date();
		date = date.getUTCFullYear() + '-' +
    			('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    			('00' + date.getUTCDate()+1).slice(-2); 
        var criteria = {fecha_eliminacion:date};
        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id provided.');
        }

        Concursante.update(id, criteria, function (err, sleep) {

            if (err) return next(err);

            res.json(sleep);

        });
    },

};

