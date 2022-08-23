//Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. 
//(That is, do not repeat any numbers in the returned list.)

//You can trust that this function will never be called with n < 0 or n > 10.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function luckyNumbers(num) {
    i = 1
    let testArray = []
        while (i <= num) {
            console.log(i)
          testArray.push(getRndInteger(1, 10))
          i++
        }
        return testArray
      }

console.log(luckyNumbers(10))