// JavaScript source code for reservation web page


// Styling the table
$(document).ready(function() {
    $('.form2').css({
        'width': '50%',
        'margin': '10px auto 20px',
        'border-collapse': 'collapse'
    });

    // Styling the thead
    $('.form2 th').css({
        'font-size': '25px',
        'border-bottom': '3px solid rgb(75, 199, 168)'
    });

    $('.form2 tbody tr:nth-child(3n)').css({
        'border-bottom': '3px solid rgb(75, 199, 168)'
    });

});


// change the background color of even and last tr
$(document).ready(function() {
    $('.form2 tbody tr:last').css({'background-color': 'rgb(75, 199, 168)'});
    $('.form2 tbody tr:even').css('background-color', 'rgba(208, 224, 220, 0.623)');
});

// Styling the form buttons and adding class
$(document).ready(function() {
    $('.form2-btns').css( {
        'width': '50%',
        'display': 'flex',
        'justify-content': 'space-between',
        'margin': '10px auto 50px',
        'line-height': '1em'
    });

    $('.form2-btns a').addClass('hero-btn green-btn');
});

$(document).ready(function() {
    $('.form2 .total').css( {
        'background-color': 'rgb(75, 199, 168)',
        'font-weight': '600',
    });

    $('.form2 .sub-total').css({
        'border-bottom': 'none',
        'border-top': '3px solid rgb(75, 199, 168)'
    });
});