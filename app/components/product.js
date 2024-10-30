import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductComponent extends Component {
  @tracked test = this.args.productList;
  productImage = this.args.productList.colors[0].image;
}
