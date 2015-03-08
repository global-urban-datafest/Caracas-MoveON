Router.route('main', {
    path: '/',
    template: "rutas"
});

Router.route('rutas', {
    path: '/rutas',
    template: 'rutas',
    onBeforeAction: function() {
        if (Meteor.user()) {
            this.render();
        } else{
            console.log('redirecting');
            this.redirect('/login');
        }
    }
});

Router.route('login', {
    path: '/login',
    template: 'login',

});

Router.route('registro', {
    path: '/registro',
    template: 'registro',

});

Router.route('rutaView', {
    template: 'rutaView',
    path: 'ruta/view/:_id',
    onBeforeAction: function() {
        if (Meteor.user()) {
            this.render();
        } else{
            console.log('redirecting');
            this.redirect('/login');
        }
    },
    data: function(){
      Session.set('idRuta', this.params._id);
    }
});


Router.route('reportes', {
    template: 'reportes',
    path: 'ruta/reportes/',
    onBeforeAction: function() {
        if (Meteor.user()) {
            this.render();
        } else{
            console.log('redirecting');
            this.redirect('/login');
        }
    }
});

Router.route('reportar', {
    template: 'reportar',
    path: 'ruta/reportes/reportar',
    onBeforeAction: function() {
        if (Meteor.user()) {
            this.render();
        } else{
            console.log('redirecting');
            this.redirect('/login');
        }
    }
});