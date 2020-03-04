$(document).ready(function(){

    $('.date').datepicker();

    $('.airport').autocomplete({
        source: ['Washington', 'Maimami', 'Los-Angeles', 'San-Francisco']
    });

    $('.meal-options').selectmenu();

    $('.bags-option').checkboxradio({
        icon: false
    });

    $('.seat-option').checkboxradio({
        icon: false
    });

    $('.submit').button();

});