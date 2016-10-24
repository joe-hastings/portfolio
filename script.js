$(function() {
    var penHeight = 400;

    $('.codepen-grid').css('height', penHeight + 'px');

    $('.load-more').click(function() {
        var pen = '<div class="pen"><p data-height="' + penHeight + '" data-theme-id="0" data-slug-hash="VjeQyX" data-default-tab="result" data-user="JoeHastings" data-embed-version="2" class="codepen"></p><script async src="//assets.codepen.io/assets/embed/ei.js"></script></div>';

        penHeight += 400;

        $('.codepen-grid').prepend(pen + pen);

        $('.codepen-grid').css('height', penHeight + 'px');
    });
});
