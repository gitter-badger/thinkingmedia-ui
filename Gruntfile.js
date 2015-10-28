module.exports = function (grunt) {
    // URI paths for our tasks to use
    grunt.dist = './dist/';
    grunt.uriTask = './grunt/';
    grunt.uriSrc = './src/UI';
    grunt.uriBuild = './build/';

    // Each task has it's own JS file.
    var tasks = {};
    tasks.pkg = grunt.file.readJSON('package.json');

    // General tasks
    tasks = require(grunt.uriTask + 'clean.js')(grunt, tasks);
    tasks = require(grunt.uriTask + 'watch.js')(grunt, tasks);

    // Concatenation Tasks
    tasks = require(grunt.uriTask + 'concat-js.js')(grunt, tasks);

    // Compass Tasks
    tasks = require(grunt.uriTask + 'sass.js')(grunt, tasks);

    // Minify Tasks
    tasks = require(grunt.uriTask + 'minify-html.js')(grunt, tasks);
    tasks = require(grunt.uriTask + 'minify-js.js')(grunt, tasks);

    grunt.registerTask('build', [
        'clean',
        'sass:prod',
        'sass:dev',
        'htmlmin:prod',
        'concat:js',
        'uglify:js',
        'clean'
    ]);
    grunt.registerTask('default', [
        'build'
    ]);

    // Initialize The Grunt Configuration
    grunt.initConfig(tasks);
};