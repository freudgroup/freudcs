<h1>Grunt Automated Web Template</h1>

Features:

- Grunt
- Sass
- Compass
- JSlint
- CSSlint
- Html5 template
- requirejs (missing implementation)
- good olde jquery
- Imagemin
- Uglify

<h2>How to run grunt?</h2>

1. If you wish to run the default, watch task, simply execute the following command:
```
$ grunt

```

2. If you wish to run the build task, execute the following command:
```
$ grunt build

```

You can find the associated files on the root folder" Gruntfile.js and package.json, config.rb is used
for compass configuration.

<h2>SASS</2>

<h3>Files folder structure: </h3>

- The modules directory is reserved for Sass code that doesn't cause Sass to actually output CSS. Things like mixin declarations, functions, and variables. 

- The partials directory is where the meat of my CSS is constructed. It can be broken into: header, content, sidebar, and footer components (and a few others). Or even much finer categories (typography, buttons, textboxes, selectboxes, etc…).

-The vendor directory is for third-party CSS. This is handy when using prepackaged components developed by other people (or for your own components that are maintained in another project). jQuery UI and a color picker are examples.

* Taken from: http://thesassway.com/beginner/how-to-structure-a-sass-project

<h4>partials/base.scss</h4>
The base stylesheet sets a couple of global variables and loads up all of my Sass modules. You can put there global variables for font styles, sizes, etc.

<h3>CSS properties order: </h3>

```
/* Please try to code the properties in the following order: */

.selector {
  /* Positioning */
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;

  /* Display & Box Model */
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 10px solid #333;
  margin: 10px;

  /* Color */
  background: #000;
  color: #fff
  
  /* Text */
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.4;
  text-align: right;

  /* Other */
  cursor: pointer;
}

```

<h3>Font imports: </h3>

```
/* Bullet Proof Font Face */
@font-face {
    font-family: 'MyWebFont';
    src: url('webfont.eot'); /* IE9 Compat Modes */
    src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('webfont.woff') format('woff'), /* Modern Browsers */
         url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
         url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
    //font-weight:;
    //font-style:;
    //etc
}
```

<h3>Recommended media queries: </h3>

```
/* MEDIA QUERIES
------------------------------------------------ */

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    /* Styles */
}

/* Smartphones (landscape) ----------- */
@media only screen and (min-width : 321px) {
    /* Styles */
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 320px) {
    /* Styles */
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    /* Styles */
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
    /* Styles */
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
    /* Styles */
}

/* Desktops and laptops ----------- */
@media only screen and (min-width : 1224px) {
    /* Styles */
}

/* Large screens ----------- */
@media only screen and (min-width : 1824px) {
    /* Styles */
}

/* Retina Display ----------- */
@media only screen and (-webkit-min-device-pixel-ratio : 1.5), only screen and (min-device-pixel-ratio : 1.5) {
    /* Styles */
}
```

* Taken from: http://css-tricks.com/snippets/css/media-queries-for-standard-devices/