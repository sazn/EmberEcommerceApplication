import Helper from '@ember/component/helper';

export default class CurrencyHelper extends Helper {
  compute([number], { sign = '$' } = {}) {
    const dollars = Math.floor(number);
    let cents = Math.floor((number * 100) % 100);

    if (cents.toString().length === 1) {
      cents = '0' + cents;
    }

    return `${sign}${dollars}.${cents}`;
  }
}
