"use strict";

/**
 * @property {object} settings Настройки корзины товаров.
 * @property {{price: number, name: string}[]} goods Список товаров что купил пользователь.
 * @property {HTMLElement} basketCountEl Место для показа количества товаров.
 * @property {HTMLElement} basketPriceEl Место для показа цены всех товаров.
 */
const basket = {
  settings: {
    countSelector: '#basket-count',
    priceSelector: '#basket-price',
  },
  goods: [],
  countEl: null,
  priceEl: null,

  /**
   * Инициализирует переменные для корзины и показывает эти значения.
   */
  init(settings = {}) {
    // Записываем настройки, которые задал программист в наши настройки.
    this.settings = Object.assign(this.settings, settings);
    this.countEl = document.querySelector(this.settings.countSelector);
    this.priceEl = document.querySelector(this.settings.priceSelector);
    this.render();
  },

  /**
   * Отображает количество всех товаров и их цену.
   */
  render() {
    this.countEl.textContent = this.goods.length;
    this.priceEl.textContent = this.getGoodsPrice();
  },

  /**
   * Считает и возвращает цену всех купленных товаров из массива this.goods.
   * @returns {number} Цену всех купленных товаров.
   */
  getGoodsPrice() {
    let cost = 0;
    for (const good of this.goods) {
      cost += good.price;
    }
    return cost;
  },

  /**
   * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех товаров.
   * @param goodName Название товара.
   * @param goodPrice Цена товара.
   */
  add(goodName, goodPrice) {
    this.goods.push({name: goodName, price: goodPrice});
    this.render();
  },
};

// Инициализируем нашу корзину при загрузке страницы.
window.onload = () => basket.init();

document.querySelectorAll('.buy-btn').forEach(el => {
  el.addEventListener('click', e => {
    basket.add(e.target.dataset.name, +e.target.dataset.price);
  })
});
