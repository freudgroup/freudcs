
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
        tasks: ['compass'],
        options: {
          spawn: false
        }
      },

      // Main JS files
      js: {
        files: ['<%= config.app %>/js/main/*.js'],
        tasks: ['jshint', 'uglify:main'],
        options: {
          spawn: false
        }
      }
    },

    // Runs compass on SCSS files
    compass : {
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

    // Concats and minify files
    uglify: {
      main: {
        options: {
          beautify: true,
          banner: '/* Title Here <%= grunt.template.today("yyyy-mm-dd") %> */ \n'
        },
        files: {
          '<%= config.app %>/js/main.min.js': '<%= config.app %>/js/main/*.js',
        }
      },

      dist : {
        options: {
          beautify: false,
          banner: '/* Title Here <%= grunt.template.today("yyyy-mm-dd") %> */ \n'
        },
        files: {
          '<%= config.dist %>/js/main.min.js': '<%= config.app %>/js/main/*.js',
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
  //grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('build', ['clean:dist', 'uglify:dist', 'copy:dist', 'imagemin:dist']);

  // Default task(s).
  grunt.registerTask('default', ['watch']);
};