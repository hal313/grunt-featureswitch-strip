/*
 * grunt-featureswitch-html
 * https://github.com/hal313/grunt-featureswitch-html
 *
 * Copyright (c) 2016 John Ghidiu
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // TODO: Add option to silence the feature switch summary

  grunt.registerMultiTask('featureswitch-html', 'Removes disabled features from HTML', function() {
    var options = this.options({
      includeHTML: true,
      includeJS: false
    }),
        featuresDisabled = [],
        features = this.data.features;


    // TODO: Table?
    grunt.verbose.ok('features', features);


    // Log the features
    (function() {
      var featuresEnabled = [],
          longestFeature = 0;

      Object.keys(features).forEach(function (feature) {
        // Capture the longest feature switch name
        if (feature.length > longestFeature) {
          longestFeature = feature.length;
        }

        // Sort the features
        if (!features[feature]) {
          featuresDisabled.push(feature);
        } else {
          featuresEnabled.push(feature);
        }
      });

      // The longest feature + a buffer
      longestFeature += 5;

      // Log the switches
      grunt.log.subhead('Feature Switches');
      featuresEnabled.forEach(function (feature) {
        grunt.log.ok(grunt.log.table([longestFeature, 20], [feature.bold, 'ENABLED'.green.bold]));
      });
      featuresDisabled.forEach(function (feature) {
        grunt.log.ok(grunt.log.table([longestFeature, 20], [feature.bold, 'DISABLED'.red.bold]));
      });
    }());


    // Iterate over all specified file groups.
    this.files.forEach(function(file) {
      // Concat specified files.
      file.src.filter(function(filePath) {
        if (!grunt.file.exists(filePath)) {
          grunt.log.warn('Source file "' + filePath + '" not found.');
          return false;
        } else {
          return true;
        }
      })
      .map(function(filePath) {
        grunt.verbose.ok('file', filePath);
        // Read file source.
        var content = grunt.file.read(filePath);

        // Filter based on feature switch
        featuresDisabled.forEach(function(feature) {
          if (!features[feature]) {

            if (!!options.includeHTML) {
              content = content.replace(new RegExp('<!--\\s*FEATURE\\.start\\(' + feature + '\\)[\\s\\S]*?FEATURE\\.end\\(' + feature + '\\)\\s*-->', 'g'), '<!-- Feature DISABLED [' + feature + '] -->');
            }

            if (!!options.includeJS) {
              content = content.replace(new RegExp('//\\s*FEATURE\\.start\\(' + feature + '\\)[\\s\\S]*?FEATURE\\.end\\(' + feature + '\\)\\s*//', 'g'), '// Feature DISABLED [' + feature + '] //');
            }

          }
        });

        // Write the file
        grunt.file.write(file.dest, content);

        // Print a success message.
        grunt.log.writeln('File "' + file.dest + '" created.');
      });
    });

  });

};
