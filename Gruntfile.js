var autoprefixer = require('autoprefixer-core');

module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['**/*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },

        postcss: {
            options: {
                processors: [
                    autoprefixer({ browsers: ['last 5 versions'] }).postcss
                ]
            },
            dist: { src: 'css/*.css' }
        },

        csstidy: {
            dynamic_mappings: {
                expand: true,
                cwd: 'public/css/',
                src: ['**/*.scss'],
                dest: 'public/css/',
                ext: '.scss'
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'js/*.js']
        },

        watch: {
            html: {
                files: ['**/*.html'],
                options: {
                    livereload: true
                }
            },
            scss: {
                files: ['css/*.scss'],
                tasks: ['newer:sass','newer:postcss'],
                options: {
                    livereload: true
                }
            }
        }


    });

    grunt.registerTask('default', ['watch']);
};