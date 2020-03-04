$('document').ready(function() {
    
    // task 1

    $('.rainbow-item').draggable({
        axis: "y",
        snap: true,
        containment: "parent"
    });

    //task 2

    $('.photo').draggable({
        start: function() {
            $(this).addClass('selected');
        }
    });
    
    $('.trash').droppable({
        accept: ".photo",
        
        drop: function() {
            $('.selected').css("display", "none");
            $('.trash').removeClass('highlight');
            $('.trash-animation').css("display", "block");
            setTimeout(function(){
                $('.trash-animation').addClass('animate');
            }, 20);
            setTimeout(function () {
                $('.trash-animation').css("display", "none");
                $('.trash-animation').removeClass('animate');
            }, 420);
        },

        over: function() {
            $('.trash').addClass('highlight');
        },

        out: function() {
            $('.trash').removeClass('highlight');
        }
    });

})