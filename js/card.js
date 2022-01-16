class Card {
  /**
   * @type {HTMLDivElement}
   */
  #element;
  /**
   * @type {number}
   */
  #id;
  /**
   * @type {boolean}
   */
  #active = false;
  /**
   * @type {boolean}
   */
  #block = false;

  /**
   * @param {number} imgIndex
   */
  constructor(imgIndex) {
    this.#id = imgIndex;
    this.#element = document.createElement("div");
    this.#element.classList.add('card');
    this.#element.innerHTML = `
      <div class="card__front">
        <img class="card__img" src="/img/cards/${imgIndex}.JPG" alt="Card">
      </div>
      <div class="card__back">
        <img class="card__img" src="/img/card-back-side.png" alt="Back side">
      </div>
    `;
  }



  /**
   * @returns {boolean}
   */
  get isActive() {
    return this.#active;
  } 

  /**
   * @returns {number}
   */
  get cardId() {
    return this.#id;
  }

  /**
   * @returns {HTMLDivElement}
   */
  get element() {
    return this.#element;
  }

  /**
   * @returns {boolean}
   */
  get isBlock() {
    return this.#block;
  }

  /**
   * Block card state.
   */
  block() {
    this.#block = true;
  }

  /**
   * Turn a card.
   */
  turn () {
    if (!this.#block) {
      this.#active = !this.#active;
      this.#element.classList.toggle('card--active');
    }
  }
}