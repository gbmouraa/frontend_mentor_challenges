$(function () {
    function fadeOutBgColor(element){
        element.animate({backgroundColor: '#fff'},400)
    }

    $('#mark-as-read').click(function () {
        $('.qtd-notifications').fadeOut();
        $('.active-flag').fadeOut();
        $('.active').css('background-color','#fff')
        fadeOutBgColor($('.active'))
    })
})