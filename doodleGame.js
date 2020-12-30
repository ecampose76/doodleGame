const who = ['Homer Simpson', 'A deep sea diver', 'A dentist', 'Mickey Mouse', 'A basketball player', 'A lion', 'A scarecrow', 'Batman', 'Mona Lisa', 'A plumber']
const what = ['knitting a sweater', 'petting a cat', 'picking flowers', 'baking cookies', 'blowing birthday candles', 'hiking', 'drinking coffee', 'taking pictures', 'flying an invisible airplane', 'surfing']
const where = ['at a bank.', 'at the hairdresser.', 'in a library.', 'at a baseball game.', 'in bed.', 'underwater.', 'on the moon.', 'in Texas.', 'at the top of a mountain.', 'under the bed.']

function doodleGame() {
    let prompt = `${who[Math.floor(Math.random() * who.length)]} ${what[Math.floor(Math.random() * what.length)]} ${where[Math.floor(Math.random() * where.length)]}`
    return prompt
}

console.log(doodleGame())

//console.log(who.length, what.length, where.length)