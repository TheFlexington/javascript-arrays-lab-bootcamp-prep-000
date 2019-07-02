var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(array) {
  kittens.push("Ralph");
  console.log(kittens);
}

function destructivelyPrependKitten(prepend) {
  kittens.unshift("Bob");
  console.log(kittens);
}

function destructivelyRemoveLastKitten(remove) {
  kittens.pop();
  console.log(kittens);
}

function destructivelyRemoveFirstKitten(removefirst) {
  kittens.shift();
  console.log(kittens);
}

function appendKitten(name) {
  
}

function prependKitten(name) {
  
}

function removeLastKitten() {
  
}

function removeFirstKitten() {
  
}