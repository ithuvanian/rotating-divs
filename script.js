$(document).ready(function() {
    $('#left').hover(
        function() {
            $(this).css('background', '#478532');
            $('body').css('background', '#fff');
            $('#container').css('transform', 'translateX(100px)');
        },
        function() {
            $(this).css('background', '#333');
            $('body').css('background', '#656b7b');
            $('#container').css('transform', 'translateX(0)');
        });
    $('#right').hover(
        function() {
            $(this).css('background', '#8f3232');
            $('body').css('background', '#fff');
            $('#container').css('transform', 'translateX(-100px)');

        },
        function() {
            $(this).css('background', '#333');
            $('body').css('background', '#656b7b');
            $('#container').css('transform', 'translateX(0)');

        });
    $('#center').hover(
        function() {
            $(this).css('background', '#414776');
            $('body').css('background', '#333');
        },
        function() {
            $(this).css('background', '#333');
            $('body').css('background', '#656b7b');
        });
});
