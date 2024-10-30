import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-new-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product/detail', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Product::Detail />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Product::Detail>
        template block text
      </Product::Detail>
    `);

    assert.dom().hasText('template block text');
  });
});
