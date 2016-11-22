$(document).ready(function() {

    // smooth scrolling
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1250);
        return false;
    });

    // alert for email form

    $(function() {
        $('.email-sign-up').on('submit', 'form', function(event) {
            event.preventDefault();
            var $email = $('#your-email')

            if ($email.val().length !== 0) {
                alert('Thanks for subscribing!');
                $email.val('');
            } else {
                alert('Please submit a valid email address.');
            }
        });

    });
});
// This is code for the add item to cart feature. It doesn't work at the moment. need to fix actual cart
$('.addCart').click(function() {
    $('.simpleCart_quantity').fadeIn('fast').html(function(i, val) { return val * 1 + 1 });
})

// simple Cart