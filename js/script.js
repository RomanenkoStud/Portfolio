window.addEventListener('load', function() {
    // Hide the preloader
    var preloader = document.querySelector('.preloader');
    TweenMax.to(preloader, 1, {
        autoAlpha: 0,
        onComplete: function() {
        preloader.style.display = 'none';
        }
    });
});