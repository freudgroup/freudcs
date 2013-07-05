<h1>Require + Sass Boilerplate</h1>

Remember that he have this catchy boilerplate that features
https://github.com/freudgroup/freudcs/tree/master/Boilerplates/require-sass
- Sass
- Compass
- Html5 template
- requirejs (as a trust wortyhy module loader)
- good olde jquery
- a require config in main.js, showing shim config and where to place your jquery plugins. (refer this as jquery plugin boilerplates just change the plugin name).


<h2>Sass</h2>

"Sass is a meta-language on top of CSS that’s used to describe the style of a document cleanly and structurally, with more power than flat CSS allows. Sass both provides a simpler, more elegant syntax for CSS and implements various features that are useful for creating manageable stylesheets."

<h3>Requirements:</h3>
<ul>
	<li><a href="http://sass-lang.com/tutorial.html">Install Sass </a></li> 
	<li><a href="http://compass-style.org/install/">Install Compass </a></li>
</ul>

<h3>How to compile stylesheets?</h3>

<ul>
	<li>Go to the project path</li> 
	<li>execute "compass watch"</li>
</ul>
Note: the config.rb file has the compass compile configuration

<h2> Require </h2>
Required reading to understand the advantages of implementing this or any Asynchromous Module Definition (AMD)
http://requirejs.org/docs/whyamd.html

A bit about how to use the node optimizer r.js (please install node
In this boilerplate you can execute:
$ r.js -o app.build.js

Read this throughly if you want to use it for more complex projects.
http://requirejs.org/docs/optimization.html

If you whant to pursue modular development you should check out this documentation, show how you can build moudules that return different values and implement several design patterns.
http://requirejs.org/docs/api.html#define

Please let me know your thoughts around this. 
feel free to question its logic and sher some code, enjoy.