Meteor.startup(function(){

	if(Rutas.find().count <= 0){
		Rutas.insert({
			rutaID: "011-1",
			origen: "TRAPICHITO",
			destino: "MIRANDA",
			horaInicio: "05:30 AM",
			horaCierre: "10:00 PM"
		});

		Rutas.insert({
			rutaID: "011-2",
			origen: "GUATIRE",
			destino: "MIRANDA",
			horaInicio: "05:30 AM",
			horaCierre: "10:00PM"
		});

		Rutas.insert({
			rutaID: "661",
			origen: "SAN AGUSTÍN",
			destino: "NUEVO CIRCO",
			horaInicio: "05:30 AM",
			horaCierre: "11:00 PM"
		});

		Rutas.insert({
			rutaID: "921",
			origen: "STA. MONICA",
			destino: "CIUDAD UNIVERSITARIA",
			horaInicio: "05:30 AM",
			horaCierre: "10:30 PM"
		});
	}
});