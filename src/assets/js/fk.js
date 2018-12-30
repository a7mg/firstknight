$(document).ready(function() {
    // var controller = new ScrollMagic.Controller();
});

// Vars & Functions
var openPop = (me) => {
    $('.fixed-pop.'+me.data('target')).fadeIn('400',()=>{
        $('.fixed-pop.'+me.data('target')).addClass('open');
        $('.search-form input').focus();
    });
}
var closePop = () => {
    $('.fixed-pop').removeClass('open');
    setTimeout(()=>{
        $('.fixed-pop').fadeOut();
    }, 400);
}

// Actions
$(document)
    // .on('click', ()=>{})
    .on('click', '.pop-container', (e)=>{e.stopPropagation();})
    .on('click', '.open-pop', function() {
        openPop($(this));
    })
    .on('click', '.close-pop, .fixed-pop, .pop-container li:not(.dropdown) a', closePop)
    .on('click', '.menu-container .dropdown > a', function(e) {
        e.preventDefault();
        let me = $(this);
        if(me.parent('.dropdown').hasClass('open')) {
            $('.menu-container .dropdown').removeClass('open');
            $('.menu-container .dropdown ul').slideUp();
        } else {
            $('.menu-container .dropdown').removeClass('open');
            $('.menu-container .dropdown ul').slideUp();
            me.parent('.dropdown').addClass('open');
            me.next('ul').slideDown();
        }
    })

$(document).keyup(function(e) {
    // if (e.keyCode === 13) $('.save').click();     // enter
    if (e.keyCode === 27) { // esc
        closePop();
    }
});
