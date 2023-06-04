// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const getUnicodeId = (arr) => {

    const result = arr.map((character) => {
      // map over arr and bring all to lowercase and use charCodeAt
      let loweredChars = character.toLowerCase()
      const unicodeId = loweredChars.charCodeAt()
      //  make sure  unicode  var is withing unicode lowercase limits and return
      return unicodeId >= 97 && unicodeId <= 122 ? unicodeId : character
    })
    return result
  }


  function caesar(input, shift, encode = true) {

    // checks if shift can be applied 
    if (shift < -25 || shift > 25 || !shift) {
      return false
    }

    // invert shift if decoding 
    if (encode === false) {
      shift = shift * -1
    }




    // split string into array of letters

    let inputLetters = input.split("")

    // send array of letters into getUnicode to get array of numbers

    let inputUnicodeIds = getUnicodeId(inputLetters)


    // add shift to unicode numbers
    let shiftedIds = inputUnicodeIds.map((number) => {
      // checks for spaces and returns shifted number
      return typeof number === 'number' ? number + shift : number
    })

    // loop through shiftedIds 

    let correctedIds = shiftedIds.map((id) => {
      if (typeof id === 'number') {
        // check if Id is < 97 and > 122 if it is not  +26 or - 26
        if (id < 97) {
          return id + 26
        }
        if (id > 122) {
          return id - 26
        }
      }
      return id
    })

    // return into characters

    let encodedArr = correctedIds.map((id) => {
      return typeof id === 'number' ? String.fromCharCode(id) : id
    })

    // combine the new letters and return

    return encodedArr.join('')


  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
