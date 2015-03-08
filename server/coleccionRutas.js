Meteor.startup(function(){

	if(Rutas.find().count() <= 0){
		Rutas.insert({
			rutaID: "Desde mi casa hasta el Terminal",
			origen: "PETARE",
			destino: "MIRANDA",
		});

		Rutas.insert({
			rutaID: "Desde Parque Miranda hasta Wayra",
			origen: "MIRANDA",
			destino: "ALTAMIRA",
		});

		Rutas.insert({
			rutaID: "Desde Wayra a Casa de mis Padres",
			origen: "ALTAMIRA",
			destino: "CHACAO",
		});

		Rutas.insert({
			rutaID: "Desde casa de mis padres hasta mi casa",
			origen: "CHACAO",
			destino: "PETARE",
		});
	}
});