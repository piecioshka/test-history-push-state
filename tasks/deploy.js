'use strict';

var ghpages = require('gh-pages');

ghpages.publish('app', function (err) {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log('Success finished!');
});
