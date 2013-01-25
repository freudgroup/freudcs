<h1>Require-Sass Boilerplate</h1>
https://github.com/freudgroup/freudcs/tree/master/Boilerplates/require-sass

<h2>RequireJs:</h2>

Some introduction videos:

Why AMD? - Part 1
http://www.youtube.com/watch?v=M-wjQjsryMY

Why AMD? - Part 2
http://www.youtube.com/watch?v=HwO_qwcJ4rs

The Basics
http://www.youtube.com/watch?v=9BYBNPvcqwo

The Basics Part Deux
http://www.youtube.com/watch?v=9BYBNPvcqwo

Optimizer
http://www.youtube.com/watch?v=m6VNhqKDM4E

Required reading to understand the advantages of implementing this or any Asynchromous Module Definition (AMD)
http://requirejs.org/docs/whyamd.html

A bit about how to use the node optimizer r.js (please install node In this boilerplate you can execute:
$ r.js -o app.build.js

Read this throughly if you want to use it for more complex projects.
http://requirejs.org/docs/optimization.html

If you whant to pursue modular development you should check out this documentation, show how you can build moudules that return different values and implement several design patterns.
http://requirejs.org/docs/api.html#define



<h2>Sass:</h2>

<h3>Tutorials:</h3>
<ul>
	<li>http://sass-lang.com/tutorial.html</li>
	<li>http://www.lynda.com/CSS-tutorials/CSS-LESS-SASS/107921-2.html</li>
</ul>

<h3>Scout:</h3> 
A Sass compiler,  Scout is a cross-platform app that delivers the power of Sass & Compass into the hands of web designers.
http://mhs.github.com/scout-app/

<h3>Sass Structure:</h3>
<ul>
	<li>_base: File with the global constants and imported(basic) scss files</li>
	<li>_reset: Css Reset.</li>
	<li>_layout: Css file with the basic layout styles(Structure)</li>
	<li>_content: Css file with content styles.</li>
	<li>style.scss: Principal Css file, imports the stylesheets needed.</li>
</ul>

Please let me know your thoughts around this. feel free to question its logic and sher some code, enjoy.