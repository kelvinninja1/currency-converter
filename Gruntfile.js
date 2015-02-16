module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            production: {
                files: {
                    'js/script.min.js': ['js/script.js'],
                    'css/style.min.css': ['css/style.css']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9'],
                map: true
            },
            no_dest: {
                src: 'css/style.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['uglify', 'autoprefixer']);
};