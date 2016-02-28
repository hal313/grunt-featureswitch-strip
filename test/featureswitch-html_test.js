(function() {
  'use strict';

  var grunt = require('grunt');

  /*
   ======== A Handy Little Nodeunit Reference ========
   https://github.com/caolan/nodeunit

   Test methods:
   test.expect(numAssertions)
   test.done()
   Test assertions:
   test.ok(value, [message])
   test.equal(actual, expected, [message])
   test.notEqual(actual, expected, [message])
   test.deepEqual(actual, expected, [message])
   test.notDeepEqual(actual, expected, [message])
   test.strictEqual(actual, expected, [message])
   test.notStrictEqual(actual, expected, [message])
   test.throws(block, [error], [message])
   test.doesNotThrow(block, [error], [message])
   test.ifError(value)
   */

  exports['featureswitch-html'] = {
    setUp: function(done) {
      // Setup here if necessary
      done();
    },

    'simple-html-only-disabled': function(test) {
      test.expect(1);

      var actual = grunt.file.read('test/actual/simple-html-only-disabled.html');
      var expected = grunt.file.read('test/expected/simple-html-only-disabled.html');

      test.equal(actual, expected, 'should disable the HTML feature');

      test.done();
    },
    'simple-html-only-enabled': function(test) {
      test.expect(1);

      var actual = grunt.file.read('test/actual/simple-html-only-enabled.html');
      var expected = grunt.file.read('test/expected/simple-html-only-enabled.html');

      test.equal(actual, expected, 'should enable the HTML feature');

      test.done();
    },
    'simple-js-only-disabled': function(test) {
      test.expect(1);

      var actual = grunt.file.read('test/actual/simple-js-only-disabled.js');
      var expected = grunt.file.read('test/expected/simple-js-only-disabled.js');

      test.equal(actual, expected, 'should enable the JS feature');

      test.done();
    },
    'simple-js-only-enabled': function(test) {
      test.expect(1);

      var actual = grunt.file.read('test/actual/simple-js-only-enabled.js');
      var expected = grunt.file.read('test/expected/simple-js-only-enabled.js');

      test.equal(actual, expected, 'should enable the JS feature');

      test.done();
    }

  };

}());