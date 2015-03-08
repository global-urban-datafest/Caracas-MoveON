Template.login.events({

    'click #login' : function(e){
      e.preventDefault();
      // retrieve the input field values
      var email = $('#email').val()
        , password = $('#password').val();

        // Trim and validate your fields here.... 

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){
          if (err){
            noty({
                position: 'topRight',
                text: err,
                animation: {
                    open: {height: 'toggle'}, // jQuery animate function property object
                    close: {height: 'toggle'}, // jQuery animate function property object
                    easing: 'swing', // easing
                    speed: 500 // opening & closing animation speed
                }
            });
          }else{
            return Router.go('/');
          }
        });
         return false; 
      }
  });