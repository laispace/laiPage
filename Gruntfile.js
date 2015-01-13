var autoprefixer = require('autoprefixer-core');

module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'),

        clean: {
            download: ['public/download'],
            jmui: ['public/JMUI']
        },


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
            files: ['bin/www', 'app.js', 'config.js', 'Gruntfile.js', 'public/js/*.js', 'routes/*.js', 'util/*.js']
        },

        watch: {
            html: {
                files: ['**/*.html'],
                options: {
                    livereload: true
                }
            },
            //js: {
            //    files: ['bin/www', 'app.js', 'config.js', 'Gruntfile.js', 'public/js/*.js', 'routes/*.js', 'util/*.js'],
            //    tasks: ['jshint'],
            //    options: {
            //        livereload: true
            //    }
            //},

            //css: {
            //    files: ['css/*.css'],
            //    options: {
            //        livereload: true
            //    }
            //},
            scss: {
                files: ['css/*.scss'],
                tasks: ['newer:sass','newer:postcss'],
                options: {
                    livereload: true
                }
            }
        }
    });

    ////grunt.loadNpmTasks('grunt-contrib-clean');
    ////grunt.loadNpmTasks('grunt-contrib-copy');
    ////grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-sass');
    ////grunt.loadNpmTasks('grunt-at-csstidy');
    //grunt.loadNpmTasks('grunt-postcss');
    ////grunt.loadNpmTasks('grunt-nodemon');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    ////grunt.loadNpmTasks('grunt-open');


    // 生产环境下执行 grunt
    grunt.registerTask('default', ['watch']);
};