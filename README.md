# grunt-featureswitch-html

> Removes disabled features from HTML

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-featureswitch-html --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-featureswitch-html');
```

## The "featureswitch-html" task

### Overview
In your project's Gruntfile, add a section named `featureswitch-html` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  featureswitch-html: {
    options: {
        includeJS: false // Include JavaScript files
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.includeJS
Type: `boolean`
Default value: `false`

Includes the removal of code from JavaScript files.

#### options.includeHTML
Type: `boolean`
Default value: `true`

Includes the removal of code from HTML files.

### Usage Examples

#### Default Options
In this example, the file index.html is stripped of any feature switch comments.

```js
grunt.initConfig({
  featureswitch-html: {
    files: {
      src: ['app/index.html'],
      dest: 'dist.html'
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
