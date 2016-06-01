var core = require('../src/index');

module.exports = {
  test_create_empty_array: function (test) {
    test.equals(core.array.create_empty().length, 0);
    test.done();
  },
  test_create_array_with_N_null: function (test) {
    var t = core.array.create_with_N_null_elements(10);

    test.equals(t.length, 10);
    t.forEach(function (e) {
      test.equals(e, null);
    });
    test.done();
  },
  test_create_array_with_N_null: function (test) {
    var t = core.array.create_with_N_null_elements(10);

    test.equals(t.length, 10);
    t.forEach(function (e) {
      test.equals(e, 0);
    });
    test.done();
  },
  test_is_array: function (test) {
    test.ok(core.array.is_array([1, 2, 4, 0]));
    test.done();
  },
  test_is_not_array: function (test) {
    test.ok(!core.array.is_array("Hello"));
    test.done();
  },
  test_insert_element: function (test) {
    var t = core.array.create_with_N_elements(10, 1);

    t = core.array.insert(t, 2, 4);
    test.equals(t.length, 11);
    test.equals(t[4], 2);
    test.done();
  },
  test_format: function (test) {
    var t = ['30', 'mai', '2016'];

    test.equals(core.array.format(t), '30 mai 2016');
    test.done();
  },
  test_flat: function (test) {
    var t = [1, 2, [ 4, 5, [8, 9], 10], [11, 12], 13];

    test.deepEqual(core.array.flat(t), [1, 2, 4, 5, 8, 9, 10, 11, 12, 13]);
    test.done();
  }
};