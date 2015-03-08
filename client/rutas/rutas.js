Template.rutas.rendered = function(){
	Geolocation.currentLocation();
};

Template.rutas.helpers({
	rutas: function(){
		var rutas = Rutas.find();
		return rutas;
	},
	origen: function(){
		return true;
	}
});