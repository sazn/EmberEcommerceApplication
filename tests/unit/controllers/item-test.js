import { module, test } from 'qunit';
import { setupTest } from 'my-new-app/tests/helpers';

module('Unit | Controller | item', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:item');
    assert.ok(controller);
  });
});
