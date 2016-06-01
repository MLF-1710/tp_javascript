var core = require('../src/index');

module.exports = {
  test_parameters: function (test) {
    test.ok(core.func.all_parameters_presents(0, 1));
    test.done();
  },
  test_parameters2: function (test) {
    test.ok(!core.func.all_parameters_presents(0));
    test.done();
  },
  test_parameters3: function (test) {
    test.equals(core.func.default_parameter(0, 0), 0);
    test.done();
  },
  test_parameters4: function (test) {
    test.equals(core.func.default_parameter(0), 1);
    test.done();
  },
  test_parameters5: function (test) {
    test.equals(core.func.default_parameter(), 2);
    test.done();
  },
  test_parameter_list: function (test) {
    test.deepEqual(core.func.get_parameter_list(function (a, b) { }), ['a', 'b']);
    test.done();
  },
  test_apply_to_each_element: function (test) {
    var t = core.array.create_with_N_elements(10, 1);

    test.equals(t.length, 10);
    t.forEach(function (e) {
      test.equals(e, 1);
    });
    t = core.func.apply(t, function (a) { return a + 1; });
    t.forEach(function (e) {
      test.equals(e, 2);
    });
    test.done();
  }
};