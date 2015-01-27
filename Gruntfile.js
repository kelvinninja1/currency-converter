module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      development: {
        options: {
          beautify: true,
          mangle: false
        },
        files: {
          '_site/js/script.min.js': ['js/lib/jquery-1.11.1.min.js', 'js/lib/idangerous.swiper.min.js', 'js/lib/prism.js', 'js/script.js']
        }
      },
      production: {
        files: {
          '_site/js/script.min.js': ['js/lib/jquery-1.11.1.min.js', 'js/lib/idangerous.swiper.min.js', 'js/lib/prism.js', 'js/script.js']
        }
      }
    },
    sass: {
        options: {
          sourcemap: 'inline'
        },
        dist: {
            options: {
                style: 'compressed'
            },
            files: {
                '_site/css/style.css': '_sass/style.scss'
            }
        }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        map: true
      },
      no_dest: {
        src: '_site/css/style.css'
      }
    },
    shell: {
        jekyll: {
            command: 'jekyll build'
        }
    },
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            expand: true,
            cwd: 'img',
            src: ['**/*.png', 'favicons/*.ico', 'favicons/*.xml'],
            dest: '_site/img/',
            ext: '.png'
          },
          {
            expand: true,
            cwd: 'assets',
            src: ['**/*.png'],
            dest: '_site/assets/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: 'img',
            src: ['**/*.jpg'],
            dest: '_site/img/',
            ext: '.jpg'
          },
          {
            expand: true,
            cwd: 'assets',
            src: ['**/*.jpg'],
            dest: '_site/assets/',
            ext: '.jpg'
          }
        ]
      },
      svg: {
        files: [
          {
            expand: true,
            cwd: 'img',
            src: ['**/*.svg'],
            dest: '_site/img/',
            ext: '.svg'
          },
          {
            expand: true,
            cwd: 'assets',
            src: ['**/*.svg'],
            dest: '_site/assets/',
            ext: '.svg'
          }
        ]
      },
      gif: {
        files: [
          {
            expand: true,
            cwd: 'img',
            src: ['**/*.gif'],
            dest: '_site/img/',
            ext: '.gif'
          },
          {
            expand: true,
            cwd: 'assets',
            src: ['**/*.gif'],
            dest: '_site/assets/',
            ext: '.gif'
          }
        ]
      }
    },
    notify: {
      styles: {
        options: {
          title: 'Styles Compiled :)',
          message: 'all good!'
        }
      },
      images: {
        options: {
          title: 'Images Compiled :)',
          message: 'all good!'
        }
      },
      scripts: {
        options: {
          title: 'JS Compiled! :)',
          message: ':)'
        }
      }
    },
    watch: {
      styles: {
        files: ['_sass/**/*.scss'],
        tasks: ['sass', 'notify:styles']
      },
      html: {
        files: ['_includes/*.html', '_layouts/*.html', '_posts/*.html', 'blog/*.html', 'feed/*.html'],
        tasks: ['shell:jekyll', 'autoprefixer', 'notify:jekyll']
      },
      images: {
        files: ['img/**/*.{png,jpg,gif,svg}', 'assets/**/*.{png,jpg,gif}'],
        tasks: ['newer:imagemin', 'notify:images']
      },
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['shell:jekyll', 'uglify:development', 'notify:jekyll', 'notify:scripts']
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-notify');

  // Default task(s).
  grunt.registerTask('default', ['newer:imagemin', 'sass', 'autoprefixer', 'uglify:development', 'watch']);
  //grunt.registerTask('production', ['shell:jekyll', 'newer:imagemin', 'sass', 'autoprefixer', 'uglify:production']);

};