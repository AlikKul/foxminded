$('document').ready(function() {

    $('.date-picker').datepicker({
        showAnim: 'slideDown',
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 3,
        mode: 'range',
        range: 'period',
        showOn: 'both',

        onSelect: function(dateText, inst, extensionRange) {
            if (extensionRange.startDateText == extensionRange.endDateText) {
                $('.date-picker').val(extensionRange.startDateText);
            } else {
                $('.date-picker').val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);
            }
        }
    });

})