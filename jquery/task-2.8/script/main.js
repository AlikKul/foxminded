$(document).ready(function() {
    $("form[name='feedback']").validate({
        rules: {
            name: 'required',
            email: {
                required: true,
                email: true
            },
            description: 'required'
        },
        messages:{
            name: 'Please enter your name',
            email: 'Please enter a valid email address',
            description: "Describe the issue You've encontered"
        },
        submitHandler: function() {
            $.ajax({
                url: "http://localhost/server.php",
                type: "POST",
                data: $('.feedback-form').serialize(),
                success: function(msg){
                    $('.result').html(msg);
                }
            });
        }
    });
});