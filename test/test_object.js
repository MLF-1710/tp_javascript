var core = require('../src/index');

module.exports = {
  test_create_empty_object: function (test) {
    test.equals(Object.getOwnPropertyNames(core.object.create_empty()).length, 0);
    test.done();
  },
  test_all_properties: function(test) {
    test.deepEqual(core.object.all_properties({a: 1, b: "toto"}), ["a", "b"]);
    test.done();
  },
  test_all_properties2: function(test) {
    test.deepEqual(core.object.all_properties({a: 1, b: "toto", f: function() {}}), ["a", "b", "f"]);
    test.done();
  },
  test_all_properties3: function(test) {
    test.deepEqual(core.object.all_functions({a: 1, b: "toto", f: function() {}}), ["f"]);
    test.done();
  },
  test_list_properties: function(test) {
    test.deepEqual(core.object.get_properties({a: 1, b: "toto"}), [["a", 1], ["b", "toto"]]);
    test.done();
  },
  test_build_object: function(test) {
    test.deepEqual(core.object.build_object([["a", 1], ["b", "toto"]]), {a: 1, b: "toto"});
    test.done();
  },
  test_build_object_from_json: function(test) {
    test.deepEqual(core.object.build_object_from_json('{"a": 1, "b": "toto"}'), {a: 1, b: "toto"});
    test.done();
  }
};