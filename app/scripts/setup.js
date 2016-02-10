(function () {
    'use strict';

    var $menu = document.querySelector('.menu-definition');
    var $jumbotron = document.querySelector('.jumbotron');

    var menuDefinition = $menu.import.firstChild.innerHTML.replace(/\n/g, '');
    var content = menuDefinition.match(/body>(.*)<\/body/i);

    var $menuDefinition = document.createElement('section');
    $menuDefinition.classList.add('menu');
    $menuDefinition.innerHTML = content[1];

    $jumbotron.parentNode.insertBefore($menuDefinition, $jumbotron);
}());
