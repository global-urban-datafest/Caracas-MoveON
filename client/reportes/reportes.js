Template.reportes.helpers({
	reportesDirect: function(){
		return Reportes.find({rutaID: Session.get('rutaReport')});
	}
});

/**/