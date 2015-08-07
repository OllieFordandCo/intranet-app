var elixir = require('laravel-elixir');
require("laravel-elixir-uglify");
require("laravel-elixir-requirejs");

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
    .uglify('./node_modules/requirejs/require.js')  
    .sass('app.scss')
    .version("css/app.css")
    .requirejs("ready.js", {
    	baseUrl: 'node_modules/domready/',
    	name: 'ready',
    	out: './resources/assets/js/core/domready.js'
    })
    .requirejs("app.js", {
    	baseUrl: 'resources/assets/js/',
    	name: 'app',
    	out: 'app.js'
    });
});