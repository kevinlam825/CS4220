//Lab 3 - Kevin Lam

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

const discardPrompt = (result) => {
    return inquirer.prompt([{
        type: 'checkbox',
        message: 'select cards to throw away',
        name: 'cards',
        choices: [result.cards[0].value + ' OF ' + result.cards[0].suit, result.cards[1].value + ' OF ' + result.cards[1].suit, result.cards[2].value + ' OF ' + result.cards[2].suit, result.cards[3].value + ' OF ' + result.cards[3].suit, result.cards[4].value + ' OF ' + result.cards[4].suit],
        validate: (answer) => {
            if (answer.length < 5) { //Only allow up to 4 cards to be selected
                return true
            } else return 'Only select up to 4 cards'
        }
    }])
}

const findAndRemove = (current, throwaway) => {
    let arr = Array.from(throwaway) // Make object into array for comparisons

    current.forEach(card => {
        let cardString = ''
        cardString += card.value + ' OF ' + card.suit //Match format of choices
        if (arr.includes(cardString)) { //If card was selected, remove from hand
            let cardIndex = current.indexOf(card)
            delete current[cardIndex]
        }
    })

}

const print = (cardList, remainingCards) => {
    console.log('-- CARDS --')
    cardList.cards.forEach(card => {
        console.log(`${card.value} of ${card.suit}`)
    })
    console.log('-- REMAINING CARDS --')
    console.log(remainingCards)
}

const play = () => {
    cards.deck(true)
        .then(deck => cards.draw(deck.deck_id, 5))
        .then(result => {
            discardPrompt(result)
                .then(selected => {
                    findAndRemove(result.cards, selected.cards)
                    cards.draw(result.deck_id, selected.cards.length).then(newCards => {
                        newCards.cards.forEach(card => {
                            result.cards.push(card)
                        })
                        print(result, newCards.remaining)
                    });
                })

        })
        .catch(err => console.log(err))
}

module.exports = {
    draw,
    play
}