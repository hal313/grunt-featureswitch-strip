/*
 * grunt-featureswitch-strip
 * https://github.com/hal313/grunt-featureswitch-strip
 *
 * Copyright (c) 2016 John Ghidiu
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {


    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        'featureswitch-strip': {

            // Simple test of the HTML feature switch
            'simple-html-only-disabled': {
                features: {
                    f1: false
                },
                files: [{
                    src: ['test/source/simple.html'],
                    dest: 'test/actual/simple-html-only-disabled.html'
                }]
            },

            'simple-html-only-enabled': {
                features: {
                    f1: true
                },
                files: [{
                    src: ['test/source/simple.html'],
                    dest: 'test/actual/simple-html-only-enabled.html'
                }]
            },

            'simple-js-only-disabled': {
                options: {
                    includeJS: true
                },
                features: {
                    f1: false
                },
                files: [{
                    src: ['test/source/simple.js'],
                    dest: 'test/actual/simple-js-only-disabled.js'
                }]
            },

            'simple-js-only-enabled': {
                options: {
                    includeJS: true
                },
                features: {
                    f1: true
                },
                files: [{
                    src: ['test/source/simple.js'],
                    dest: 'test/actual/simple-js-only-enabled.js'
                }]
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'featureswitch-strip', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
