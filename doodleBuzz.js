const who = ['Homer Simpson', 'A deep sea diver', 'A dentist']
const what = ['knitting a sweater', 'petting a cat', 'picking flowers']
const where = ['at a bank.', 'at the hairdresser.', 'in a library.']

function doodleBuzz() {
    let prompt = `${who[Math.floor(Math.random() * who.length)]} ${what[Math.floor(Math.random() * what.length)]} ${where[Math.floor(Math.random() * where.length)]}`
    return prompt
}

console.log(doodleBuzz())