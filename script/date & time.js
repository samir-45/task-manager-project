// Get current date

let ml = new Date()
let cr = ml.toDateString()
const date = cr;
const day = date.slice(0, 3);
const week = date.slice(4, 15);
// console.log(date.slice(0, 3))
// console.log(date.slice(4, 15))

document.getElementById("day").innerText = day;
document.getElementById("week").innerText = week;


// Get current time

const currTime = ml.toLocaleTimeString()



