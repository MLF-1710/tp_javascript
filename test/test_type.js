var core = require('../src/index');

module.exports = {
  test_add_int: function (test) {
    test.ok(core.type.add_int(1, 2) === 3);
    test.done();
  },
  test_add_int2: function (test) {
    test.ok(core.type.add_int(1.5, 2) === 3);
    test.done();
  },
  test_add_double: function (test) {
    test.ok(core.type.add_double(1.5, 2) === 3.5);
    test.done();
  },
  test_et: function (test) {
    test.ok(core.type.and(3 < 4, 8 >= 6));
    test.done();
  },
  test_xor: function (test) {
    test.ok(!core.type.xor(3 < 4, 8 >= 6));
    test.done();
  },
  test_concat_string: function (test) {
    test.ok(core.type.concat_string("Hello", ' world!') === 'Hello world!');
    test.done();
  },
  test_sub_string: function (test) {
    test.ok(core.type.sub_string("Hello world!", 0, 1) === 'H');
    test.done();
  },
  test_remove_sub_string: function (test) {
    test.equals(core.type.remove_sub_string("Hello world!", 5, 7), 'Hello');
    test.done();
  },
  test_remove_sub_string2: function (test) {
    test.equals(core.type.remove_sub_string("Hello world!", 5, 8), 'Hello');
    test.done();
  },
  test_remove_sub_string3: function (test) {
    test.equals(core.type.remove_sub_string("Hello world Eric!", 6, 6), 'Hello Eric!');
    test.done();
  },
  test_uncamelize: function (test) {
    test.equals(core.type.uncamelize('helloWorld', '_'), 'hello_world');
    test.done();
  }
};