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

function appendKitten(concat) {
  var concat1 = ["Broom"]
  console.log(kittens.concat(concat1))
}

function prependKitten(concat) {
  var concat1 = ["Arnold"]
  console.log(concat1.concat(kittens))
}

function removeLastKitten(slice) {
  console.log(kittens.slice(-1));
}

function removeFirstKitten(slice) {
  console.log(kittens.slice(1));
}