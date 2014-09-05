
module.exports = function (grunt) {

  // Configurable paths
  var config = {
    app: 'src',
    dist: 'build'
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Project settings
    config: config,

    // Watch for changes on the CSS & JS files
    watch: {
      // SCSS files
      sass: {
        files: ['<%= config.app %>/scss/**/*.scss'],
        tasks: ['compass:main'],
        options: {
          spawn: false
        }
      },

      // Main JS files
      js: {
        files: ['<%= config.app %>/js/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false
        }
      }
    },

    // Runs compass on SCSS files
    compass : {
      main: {
        options: {
          config: 'config.rb',
          watch: true
        }
      },
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    // Checks JS files
    jshint: {
      options : {
        reporter: 'jslint',
        force: 'true',
        reporterOutput: '<%= config.app %>/js/errors.log'
      },
      all: ['<%= config.app %>/js/main/*.js']
    },

    //Compiles AMD modules
    requirejs: {
      dist: {
        options: {
            appDir: 'src',
            baseUrl: 'js/',
            dir: 'build',
            optimize: 'uglify',
            // uglify: {
            //   verbose: true
            // },
            mainConfigFile: 'src/js/config.js',
            optimizeCss: 'none',
            modules:[{
                name: 'main',
                include: [
                    'application',
                    'jquery'
                ]
            }]
        }
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/img',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: '<%= config.dist %>/img'
        }]
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            'img/{,*/}*.webp',
            '{,*/}*.html',
            'fonts/{,*/}*.*',
            'css/{,*/}*.*',
            'js/libs/{,*/}*.*'
          ]
        }]
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('build', ['compass:dist', 'clean:dist', 'copy:dist', 'requirejs:dist', 'imagemin:dist']);

  // Default task(s).
  grunt.registerTask('default', ['watch']);
};