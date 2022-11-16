class Bakelser {
  color: string;
  taste: string;
  shape: string;
  constructor(color: string, taste: string, shape: string) {
    this.color = color;
    this.taste = taste;
    this.shape = shape;
  }
}

let cupcakeList: Bakelser[] = [
  new Bakelser("white", "vanilla", "round"),
  new Bakelser("brown", "chocholate", "round"),
  new Bakelser("yellow", "lemon", "square"),
  new Bakelser("yellow", "chocholate", "square"),
];
let squareFound: string[] = [];
isItSquare(cupcakeList);

function isItSquare(cupcakeList: Bakelser[]) {
  for (let i = 0; i < cupcakeList.length; i++) {
    if (cupcakeList[i].taste === "chocholate") {
      console.log("found on Bakelse: " + (i + 1));
      pushToList(cupcakeList[i]);
    }
  }
}

function pushToList(theCupcake: Bakelser) {
  console.log(theCupcake); //dessa bakelser innehåller choklad
  let toString: string = JSON.stringify(theCupcake);
  squareFound.push(toString);
  testtry();
}

function testtry() {
  console.log(squareFound);
}
