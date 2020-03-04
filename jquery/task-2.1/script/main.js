$(document).ready(function(){

    $("#date").datepicker();
    $('.checkout-btn').click(() => {
        $('.redirect-confirmation').dialog({
            
            minWidth: 500,
            resizable: false,
            modal: true,

            buttons: [
                {
                    text: 'Yes',
                    click: function() {
                        $(this).dialog('close');
                    }
                },
                {
                    text: 'No',
                    click: function() {
                        $(this).dialog('close');
                    }
                }
            ]
        });
    });
});