(function () {
    'use strict';

    var pathname = '/test-history-push-state/';

    function setupMenuLink($item, data, title, url) {
        $item.href = url;
        $item.addEventListener('click', function (evt) {
            evt.preventDefault();
            document.querySelector('h1').innerText = data.name;
            history.pushState(data, title, url);
        });
    }

    window.addEventListener('load', function () {
        var $menu = document.querySelector('.nav');

        if (!$menu) {
            console.warn('Warning: $menu is not exists');
            return;
        }

        var $home = $menu.querySelector('.home');
        var $portfolio = $menu.querySelector('.portfolio');
        var $about = $menu.querySelector('.about');
        var $contact = $menu.querySelector('.contact');

        setupMenuLink($home, { name: 'Hello, world! (2)' }, 'home', pathname);
        setupMenuLink($portfolio, { name: 'Portfolio (2)' }, 'page 1', pathname + 'pages/portfolio.html');
        setupMenuLink($about, { name: 'About (2)' }, 'page 2', pathname + 'pages/about.html');
        setupMenuLink($contact, { name: 'Contact (2)' }, 'page 3', pathname + 'pages/contact.html');
    });

}());
