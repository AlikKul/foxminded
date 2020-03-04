$('document').ready(function() {

    function refreshEventListeners() {    // add onclick event to generated elements
        $('li').off();

        $('li').on('click', '.delete-btn', function() {
            $(this).parent().remove();
        });

        $('li').draggable({
            snap: true,
            revert: 'invalid'
        });
    
        $('.done-list').droppable({
            snap: true,
            accept: 'li',
            hoverClass: '.done-list-highlight'
        });
        
    }

    refreshEventListeners();

    $('.add-new-task').click(function() {
        let li = document.createElement('li');  
        li.innerHTML = $('.new-task').val() + ' ' + '<button class="delete-btn">X</button>';
        $('.to-do-list').append(li);
        refreshEventListeners();
        $('.new-task').val('');
    });

});