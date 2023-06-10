$( document ).ready(function() {

    $( "#show-popup" ).on( "click", function() {
        $('#popup, .overlay').fadeIn();
    } );

    $( "#close, .overlay" ).on( "click", function() {
        $('#popup, .overlay').fadeOut();
    } );

    $('#main-form').submit(function(e) {
        
        var name = $('#st_name').val();
        var email = $('#email-address').val();
        var error = 0;

        $(".error").remove();

        if (name.length < 1) {
            error = 1;
            $('#st_name').after('<span class="error">To pole jest wymagane</span>');
        
        } else if (name.length < 3) {
            error = 1;
            $('#st_name').after('<span class="error">To pole musi posiadać min. 3 znaki</span>');
        
        } else if (name.length > 70) {
            error = 1;
            $('#st_name').after('<span class="error">To pole może posiadać max. 10 znaków</span>');
        }

        if (email.length < 1) {
            error = 1;
            $('#email-address').after('<span class="error">To pole jest wymagane</span>');
        
        } else {

            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var valid = regex.test(email);
        
            if (!valid) {
                error = 1;
                $('#email-address').after('<span class="error">Wpisz poprawny adres email</span>');
            }
        }

        if(error == 1) {
            e.preventDefault();
        }
    })
 
});