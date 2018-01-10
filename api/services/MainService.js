module.exports = {
  getConcursantes: function(next) {
	    Concursante.find().exec(function(err, todos) {
	      if(err) throw err;
	      next(todos);
	    })
	},
  getPlatos: function(next) {
	    Plato.find().exec(function(err, todos) {
	      if(err) throw err;
	      next(todos);
	    })
	},
  getIngredientes: function(next) {
	    Ingredientes.find().exec(function(err, todos) {
	      if(err) throw err;
	      next(todos);
	    })
	},
  getRondas: function(next) {
	    Ronda.find().exec(function(err, todos) {
	      if(err) throw err;
	      next(todos);
	    })
	}
}