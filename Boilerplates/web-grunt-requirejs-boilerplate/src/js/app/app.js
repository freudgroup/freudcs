/*
 * Application code
 * loading other module
 */
require(['jquery', 'app/other'], function ($) {

  'use strict';

  console.log('hola');
  $('#container').append('<h1>hola!</h1>');

});
