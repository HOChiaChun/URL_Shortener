function generate() { 
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = "1234567890"
  const collection = lowerCaseLetters.split("").concat(upperCaseLetters.split("")).concat(numbers.split(""))

  let URL = ""

  for (let i = 1; i <= 5; i++) {
    URL += collection[Math.floor(Math.random() * collection.length)]
  }
   return URL
}


module.exports = generate