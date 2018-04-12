import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | multipletext', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:multipletext');
    assert.ok(route);
  });
});
