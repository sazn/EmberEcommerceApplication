import { module, test } from 'qunit';
import { setupTest } from 'my-new-app/tests/helpers';

module('Unit | Controller | cart', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:cart');
    assert.ok(controller);
  });
});
