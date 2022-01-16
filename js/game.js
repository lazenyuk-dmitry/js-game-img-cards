class Game {
  /**
   * @type {number}
   */
  #cardsCount = 10;
  /**
   * @type {Card[]}
   */
  #cardsArray = [];
  /**
   * @type {Element}
   */
  #gameTable = document.querySelector('.game-table');
  /**
   * @type {Gard}
   */
  #storeCard = null;


  constructor () {
    for (let i = 1; i <= this.#cardsCount; i++) {
      this.#cardsArray.push(new Card(i), new Card(i));
    }

    this.#cardsArray.sort((a, b) => 0.5 - Math.random());
  }

  /**
   * Turn all cards on table
   */
  turnAllActiveCards() {
    this.#cardsArray.forEach((card) => {
      if (!card.isBlock && card.isActive) {
        card.turn();
      }
    });
  }

  /**
   * Start game.
   */
  start() {
    this.#cardsArray.forEach((card) => {
      this.#gameTable.appendChild(card.element);

      card.element.addEventListener('click', e => {
        if (this.#storeCard !== card && !card.isBlock) {
          if (this.#storeCard && this.#storeCard.cardId === card.cardId) {
            this.#storeCard.block();
            this.#storeCard = null;
            card.turn();
            card.block();

          } else if (this.#storeCard && this.#storeCard.cardId !== card.cardId) {
            this.#storeCard = null;
            card.turn();
        
          } else {
            this.#storeCard = card;
            this.turnAllActiveCards();
            card.turn();
          }
        }
      })
    });
  }
}