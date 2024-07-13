window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const button = document.getElementById('buttonChange')
    const trendingElement = document.getElementById('trendingElement');
    const trendingPosition = trendingElement.getBoundingClientRect().top;

    if (trendingPosition <= 0) {
        header.classList.add('header-change');
        button.classList.add('button-change')
    } else {
        header.classList.remove('header-change');
        button.classList.remove('button-change');
        
    }
});
