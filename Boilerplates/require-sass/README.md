Remember that he have this catchy boilerplate that features
https://github.com/freudgroup/freudcs/tree/master/Boilerplates/require
- Css Reset
- Html5 template
- requirejs (as a trust wortyhy module loader)
- good olde jquery
- a require config in main.js, showing shim config and where to place your jquery plugins. (refer this as jquery plugin boilerplates just change the plugin name).


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