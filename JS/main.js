$( document).ready(function(){

    $('.carousel').flickity({

        cellAlign: 'left',
        contain: true,
  });

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1250);
        return false;
});
});