import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | singletext', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:singletext');
    assert.ok(route);
  });
});
