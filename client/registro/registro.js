Template.registro.events({
	"submit #registro-form": function(){

        var trimInput = function(val) {
            return val.replace(/^\s*|\s*$/g, "");
        };

        var isValidPassword = function(val) {
            return val.length >= 6 ? true : false; 
        };

        var first_name = $('#first_name').val();
        var last_name  = $('#last_name').val();
        var username   = $('#username').val();
        var email      = trimInput($('#email').val());


        if(isValidPassword($('#password').val())){
            if($('#password').val() === $('#RePassword').val()){
                var password = $('#password').val();
            }else{
              console.log("no coincide");
            }
        }else{
            console.log('error');
        }

        Accounts.createUser({
            email: email,
            password: password,
            profile: {
                first_name: first_name,
                last_name: last_name,
                username: username,
            }
        }, function(err){
            if(err){
                noty({
                      position: 'topRight',
                      text: "ocurrio un error, verifica tu data",
                      animation: {
                          open: {height: 'toggle'}, // jQuery animate function property object
                          close: {height: 'toggle'}, // jQuery animate function property object
                          easing: 'swing', // easing
                          speed: 500 // opening & closing animation speed
                      }
                  });
                return console.log(err);
            }else{
                noty({
                      position: 'topRight',
                      text: 'Tu perfil fue creado con exito',
                      animation: {
                          open: {height: 'toggle'}, // jQuery animate function property object
                          close: {height: 'toggle'}, // jQuery animate function property object
                          easing: 'swing', // easing
                          speed: 500 // opening & closing animation speed
                      }
                  });
                return  Router.go('/');
            }
        });
        return false;
    }
});