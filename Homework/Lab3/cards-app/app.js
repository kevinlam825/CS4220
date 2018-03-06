const
    cards = require('deckofcards'),
    inquirer = require('inquirer')

const draw = (shuffle, n = 1) => {
    cards.deck(shuffle)
        .then(deck => cards.draw(deck.deck_id, n))
        .then(result => {
            console.log('-- CARDS --')
            result.cards.forEach(card => {
                console.log(`${card.value} of ${card.suit}`)
            })

            console.log('-- REMAING CARDS --')
            console.log(result.remaining)
        })
        .catch(err => console.log(err))
}

// HINT for #3 in Lab
const discardPrompt = (result) => {
    return inquirer.prompt([{
        type: 'checkbox',
        message: 'select cards to throw away',
        name: 'cards',
        choices: [result.cards[0].value + ' OF ' + result.cards[0].suit, result.cards[1].value + ' OF ' + result.cards[1].suit, result.cards[2].value + ' OF ' + result.cards[2].suit, result.cards[3].value + ' OF ' + result.cards[3].suit, result.cards[4].value + ' OF ' + result.cards[4].suit], // implement choices array - look at the inquirer documentation,
        validate: (answer) => {
            if (answer.length < 5) {
                return true
            } else return 'Only select up to 4 cards'
        }
    }])
}

// HINT for #4 in Lab
const findAndRemove = (current, throwaway) => {
    let arr = Array.from(throwaway)
    current.forEach(card => {
        let cardString = ''
        cardString += card.value + ' OF ' + card.suit
        if (arr.includes(cardString)) {
            let cardIndex = current.indexOf(card)
            delete current[cardIndex]
        }
    })
}

// HINT for #6 in Lab
const print = cards => {
    console.log(cards)
    console.log('-- CARDS --')
    cards.forEach(card => {
        console.log(`${card.value} of ${card.suit}`)
    })

    console.log('-- REMAING CARDS --')
    console.log(cards.remaining)

}

const play = () => {
    cards.deck(true)
        .then(deck => cards.draw(deck.deck_id, 5))
        .then(result => {
            discardPrompt(result)
                .then(selected => {
                    findAndRemove(result.cards, selected.cards)
                        //result.draw(result.deck_id, selected.cards.length)
                        //return result.cards
                    console.log(result.cards)
                    console.log(result)
                })

        })
        //.then(ag => cards.draw(ag.deck_id, 5))
        //.then(gotIt => print(cards))
        .catch(err => console.log(err))
}

module.exports = {
    draw,
    play
}