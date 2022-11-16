//bra testfunktion med typescript

let sum: number = 0;

const addNumbers = (nummer: number): number => {
  sum = nummer + 7;
  return sum;
};

addNumbers(3);
console.log(sum);

////////////////////////////////////////////////////////
//här har jag börjat med mina klickevents

let myForm: HTMLFormElement = document.getElementById(
  "myForm"
) as HTMLFormElement;
let myinput: HTMLInputElement = document.getElementById(
  "myinput"
) as HTMLInputElement;
myinput.addEventListener("keypress", function (event) {
  let myInputValue: string = myinput.value;
  if (event.key === "Enter") {
    console.log(myInputValue);
    event.preventDefault();
    hej(myInputValue);
  }
});
function hej(minInput: string) {
  myForm.addEventListener("submit", function (event) {
    console.log(minInput);
    event.preventDefault();
    return minInput;
  });
}
