# requirejs + compass 

Remember that he have this catchy boilerplate that features
- Sass
- Compass
- Html5 template
- requirejs (as a trust wortyhy module loader)
- good olde jquery
- a require config in main.js, showing shim config and where to place your jquery plugins. (refer this as jquery plugin boilerplates just change the plugin name).



## Requirements:
* [Install Nodejs](http://nodejs.org/)
* [Install Sass](http://sass-lang.com/tutorial.html "install sass NOW!") 
* [Install Compass](http://compass-style.org/install/ "Install Compass NOW!") 

    
## Usage

#### How to compile stylesheets?
* open a terminal in this project path root 
* execute:

    ```Shell
    $ compass watch
    ```

this will 
Note: the config.rb file has the compass compile configuration and the paths to where your SASS is being compiled 

#### How run the optimizer?
* inside the project path 
* execute this command:

    ```Shell
    $ r.js -o app.build.js
    ```

this will concatenate uglyfy JS and CSS and deploy the optimized app in /webapp-build next to the /webapp folder.



## Further recomended reading

### Sass
"[Sass](http://sass-lang.com/ "Sass") is a meta-language on top of CSS that’s used to describe the style of a document cleanly and structurally, with more power than flat CSS allows. Sass both provides a simpler, more elegant syntax for CSS and implements various features that are useful for creating manageable stylesheets."

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