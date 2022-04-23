/* Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john" */

let nameShuffler = (str) => str.split(' ').reverse().join(' ');

/* 
To begin working on this codewar I knew I would need a return somewhere in this code and a method/s
to swap the first name with the last name. After reading about the three methods I used
 .split(), .reverse() and .join(, I decided to keep working on arrow fucntions because I like how 
the code is shorter with them and I want to keep challenging myself to get better at them.

*/