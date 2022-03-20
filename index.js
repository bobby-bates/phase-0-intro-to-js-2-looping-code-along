// For loop:
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
// }

// const gifts = ['teddy bear', 'drone', 'doll']
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//     }
//     return gifts
// }
// wrapGifts(gifts)

const names = ['Bobby', 'Rachel', 'Phil', 'Dan']
function writeCards(names, event) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    // for (let message of messages) {console.log(message)}
    return messages
}
writeCards(names, 'birthday')

function countDown(num) {
    do {
        console.log(num)
        num--
    } while (num >= 0)
}
countDown(4)