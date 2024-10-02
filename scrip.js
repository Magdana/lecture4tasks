//task 1

let str = prompt("enter string");

function sortCharachters(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }

  return arr.sort().join("");
}
let newArr = sortCharachters(str);
console.log(newArr);

//task 2

let num = prompt("enter the length");

function idGenerator(number) {
  let id = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < number) {
    id += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter++;
  }
  return id;
}
let newId = idGenerator(num);
console.log(`your random id is: ${newId}`);

//task 3
let numb = prompt("Enter a number to check whether it is perfect or not:");
function perfectNum(numb) {
  let sum = 0;
  for (let i = 1; i <= numb / 2; i++) {
    if (numb % i === 0) {
      sum += i;
    }
  }
  return sum === parseInt(numb);
}

let result = perfectNum(numb);
if (result) {
  console.log(`${numb} is a perfect number.`);
} else {
  console.log(`${numb} is not a perfect number.`);
}

//task 4

let par = document.getElementById("text");
let btn = document.getElementById("jsstyle");
let isStyled = false;

function js_style() {
  if (!isStyled) {
    par.style.color = "green";
    par.style.fontSize = "60px";
    par.style.fontFamily = "Franklin Gothic Medium";
    isStyled = true;
  } else {
    par.removeAttribute("style");
    isStyled = false;
  }
}

//task 5

let colors = document.getElementById("colorSelect");
function removecolor() {
  colors.remove(colors.selectedIndex);
}
