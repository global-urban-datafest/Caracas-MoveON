Template.ruta.events({
	'click #mejorRuta': function(){
		return Session.set('rutaReport', this._id);
	}
})