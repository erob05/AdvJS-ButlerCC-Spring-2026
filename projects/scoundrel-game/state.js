const gameState = {
    hp: 20,
    maxHp: 20,
    deck: [],
    currentCard: null
};

function buildDeck() {
    const suits = ['&spades;', '&hearts;', '&clubs;', '&diams;'];
    const deck = [];

    for (let i=0; i < suits.length; i++) {
        for (let value=1; value <= 10; value++) {
            deck.push(`${suit}${value}`);
        }
    }

    deck.push('&spades;K', '&clubs;K');

    console.log("Deck built:", deck);
    return deck;
}