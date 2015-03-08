Template.rutaView.helpers({
	rutaEstablecida: function(){
		return Rutas.findOne({_id: Session.get('rutaReport')});
	},
});
