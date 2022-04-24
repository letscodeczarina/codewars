/* In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code */


function findMultiples(integer, limit) {
    let arr = [];
    for (let i = integer; i <= limit; i= i+integer){
        arr.push(i)
      }
    return arr
  }

/* To begin this exercise I knew I would need a for loop to shuffle through the 
multiples of the parameter named limit. I would also need a new variable to store the array of numbers that the function
will return. The .push() method was included in my answer because we need to push everything we are 
getting from the for loop into the new variable to return the array of numbers from the two passed in arguments.

*/