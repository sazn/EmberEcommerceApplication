import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductDetails extends Component {
  @service('shopping-cart') cartService;

  @action
  addToCart() {
    console.log(this.args);
    const { name, color, colors, price, isDetails } = this.args;
    this.cartService.addItem({
      name,
      color,
      isDetails,
      image: colors.find((colorInfo) => colorInfo.color === color).image,
      price: price.current,
    });
  }
}
