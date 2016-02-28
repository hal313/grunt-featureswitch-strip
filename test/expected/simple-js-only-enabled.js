(function (){
    'use strict';

    var environment = 'production';
    // FEATURE.start(f1) //
    environment = 'development';
    // FEATURE.end(f1) //

    console.log('environment', environment);
}());