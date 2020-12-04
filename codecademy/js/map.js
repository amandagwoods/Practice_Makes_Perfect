const numbers = [1,2,3,4,5,6,7,8,9,10]
const fruit = ["apple", "banana", "cherry", "date", "elderberry"]
const booleans = [true, false, true, false, false, true, true]

const doubleNumbers = numbers.map((num,) => {
return num * 2
}) //?


const titleCasedWords = fruit.map((word) => {
    return word[0].toUpperCase().concat(word.slice(1))
})

