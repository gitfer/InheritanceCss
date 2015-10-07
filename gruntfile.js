module.exports = function (grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({
        
        watch: {
            myStyles: {
                files: ['gruntfile.js', 'Content/app/**/*.scss','Content/style.scss'],
                tasks: 'sass'
            }
        },
        sass: {
            dist: {
                options: {                       // Target options
                    sourcemap: 'auto',
		    noCache: true
                },
                files: [
                {
                    expand: true,
                    cwd: 'Content/app',
                    src: ['*.scss'],
                    dest: 'Content/app',
                    ext: '.css'
                }, {
                    'Content/style.css': 'Content/style.scss'
                }]
            }
        }
        
    });

    // Load the Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', [ 'sass']);
};