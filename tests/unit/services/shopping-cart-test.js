import { module, test } from 'qunit';
import { setupTest } from 'my-new-app/tests/helpers';

module('Unit | Service | shopping-cart', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:shopping-cart');
    assert.ok(service);
  });

  // test('addItem works', function (assert) {
  //   const service = this.owner.lookup('service:shopping-cart');
  //   assert.equal(service.itemList.lenght, 0);
  // });
});
