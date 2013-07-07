# requirejs + jquery
This is a stripped down jquery + requirejs sample application to help understand the usage and advantages of 
1. [requirejs](http://requirejs.org/), as a script loader to simplify separation of concerns in development 
2. And [r.js](http://requirejs.org/docs/optimization.html#download), the optimization tool to concatenate, minify and deploy your javascript (and even minify your css in case you don;t use any [sass](http://sass-lang.com/) or [less](http://lesscss.org/)). 

It features:
- Css Reset
- Html5 template
- requirejs (as a trust wortyhy module loader)
- good olde jquery
- a requirejs configuration set in main.js, 
- Instructions to load non-AMD libraries using shim in main.js (this vital for most jquery plugins).

## Requirements:
* [Install Nodejs](http://nodejs.org/)

## Usage
#### How run the optimizer?
* open a terminal in this project path root 
* execute this command:

    ```Shellgi
    $ r.js -o app.build.js
    ```

this will concatenate uglyfy JS and CSS and deploy the optimized app in /webapp-build next to the /webapp folder.

## Further recomended reading

### About requirejs
Required read to understand the advantages of implementing this into your default web projects and code using Asynchronous Module Definition (AMD)
[AMD, why.](http://requirejs.org/docs/whyamd.html)

### About the otimizer
Read this throughly if you want to use it for more complex projects, or compile js for multiple pages, and similar sorceries. 
[r.js optimization tool](http://requirejs.org/docs/optimization.html)

### Using require modules
Please refer to require API, in case you need to complicate things and separate concerns into modules.
[Requirejs API](http://requirejs.org/docs/api.html#define)

As per module declaration with dependencies we would recommend using thi sintax as it is fail proof and always found on top of the module

```javascript
/**
 * Module Description
 */
require(['dependencymodule'], function(module){
    // your code here vvvvvv
});

```


### WHISLIST
- port this to a [yeoman generator](http://yeoman.io/generators.html) in it's own repo, so we have a simple clean project to start development.


Please let us all know your thoughts around this. 
feel free to question and edit, enjoy.