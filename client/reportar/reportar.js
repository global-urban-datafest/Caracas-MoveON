Template.reportar.helpers({
	fotoInstantanea: function(){
		return Session.get('fotoReporte');
	},
	fotoInstantaneaExist: function(){
		if(Session.get('fotoReporte')){
			return true;
		}else{
			return false;
		}
	},
});

Template.reportar.events({
	'click #capture': function(){
		MeteorCamera.getPicture(function(err, data){
	      if(err){
	        return err;
	      }else{
	        Session.set('fotoReporte', data);
	        return true;
	      }
	    });
	},
	
	'click #reportar': function(){
		Reportes.insert({
			"rutaID": Session.get('rutaReport'),
			"reporte": $('#reporte').val(),
			"categoria": $('#etiqueta').val(),
			"fotoReporte": Session.get('fotoReporte'),
			"LatUser": Geolocation.currentLocation().coords.latitude,
			"LongUser": Geolocation.currentLocation().coords.longitude
		});
		return Router.go('/rutas');
	}
});