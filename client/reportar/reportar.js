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

		HTTP.get('http://192.168.1.110:8800?Text=Hola Este es un Reporte de MoveON: '+$('#reporte').val()+"En el Trayecto "+Rutas.findOne({_id: Session.get('rutaReport')}).origen+'-'+Rutas.findOne({_id: Session.get('rutaReport')}).destino+'&PhoneNumber=04242705623,04263054727,04241685553,04242591001,04142869853,04125777821,04242612957,04263199378,04124871000,04242905464,04247421020,04164031217,04164240018', function(){

		});
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