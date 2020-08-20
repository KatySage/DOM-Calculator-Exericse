'use strict';
//set up variable for item input screen
const inputScreen = document.getElementById('input')
//add click handlers to the numbers clicked
const numberButtons = document.querySelectorAll(".number")
let inputArrayNum = []
let inputArrayFull = []
numberButtons.forEach(function(element){
    element.addEventListener('click', function (event) {
        event.preventDefault();
        //this is for the array
        let currentValues = inputScreen.innerText;
        let lastCharacter = currentValues[currentValues.length -1]
        if (lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "/" || lastCharacter === "x") {
            //makes previous typed numbers be joined
            inputArrayFull.push(inputArrayNum.join(''));
            //makes a new array entry with the operator
            inputArrayFull.push(lastCharacter)
            //resets my individual number array
            inputArrayNum = []
            //adds the lastest pushed number into the array
            inputArrayNum.push(element.innerHTML)
            console.log(inputArrayFull)
            inputScreen.innerText += element.innerHTML
    } else {        
        inputScreen.innerText += element.innerHTML
        inputArrayNum.push(element.innerHTML)
        console.log(inputArrayNum)}
})     })
// add click handlers to the calculation buttons
const operButtons = document.querySelectorAll(".operator")
// const inputArrayOperator = []
operButtons.forEach(function(element){
    element.addEventListener('click', function (event) {
        event.preventDefault();
        let currentValues = inputScreen.innerText;
        let lastCharacter = currentValues[currentValues.length -1];
        if (lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "/" || lastCharacter === "x") {
            const newString = currentValues.substring(0,currentValues.length -1) + element.innerHTML;
            inputScreen.innerText = newString;
            
        } else if (currentValues.length === 0) {
            alert("TYPE A NUMBER FIRST");
        } else {
            inputScreen.innerText += element.innerHTML;
        }
        })    
    })
//set up equal button
const eqButton = document.querySelector(".equal")
eqButton.addEventListener('click', (event) => {
    event.preventDefault();
    let currentValues = inputScreen.innerText;
    let lastCharacter = currentValues[currentValues.length -1];
    if (lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "/" || lastCharacter === "x") {
        alert("You cannot end on an operator. Please enter a number after the operator.")
    } else {
    inputArrayFull.push(inputArrayNum.join(''));
    console.log(inputArrayFull)
    //removes "" when doing repeated results
    const toRemove = [""];
    inputArrayFull = inputArrayFull.filter( (element) => !toRemove.includes(element) );
    //set num array to nothing
    inputArrayNum = []
    //set up operators array
    const arrayOp =["+", "-", "x", "/"]
    //set up i variable
    let i = 0;
    //multiplication
    while (inputArrayFull.indexOf("x") !== -1) {
        i = inputArrayFull.indexOf("x")
        inputArrayFull.splice(i - 1, 3, inputArrayFull[i - 1] * inputArrayFull[i + 1]);
        console.log(inputArrayFull)}
    // division
    while (inputArrayFull.indexOf("/") !== -1) {
        i = inputArrayFull.indexOf("/")
        inputArrayFull.splice(i - 1, 3, inputArrayFull[i - 1] / inputArrayFull[i + 1]);
        console.log(inputArrayFull) }
    // addition
    while (inputArrayFull.indexOf("+") !== -1) {
        i = inputArrayFull.indexOf("+")
        const addArrayString = []
        addArrayString.push(inputArrayFull[i-1], inputArrayFull[i+1])
        console.log(addArrayString)
        var addArrayNum = addArrayString.map(Number);
        console.log(addArrayNum)
        var sum = addArrayNum.reduce(function(a, b) {return a + b;}, 0);
        console.log(sum)
        inputArrayFull.splice(i - 1, 3, sum);
        console.log(inputArrayFull) }
    //subtraction
    while (inputArrayFull.indexOf("-") !== -1) {
        i = inputArrayFull.indexOf("-")
        inputArrayFull.splice(i - 1, 3, inputArrayFull[i - 1] - inputArrayFull[i + 1]);
        console.log(inputArrayFull)
    }
    inputScreen.innerText = inputArrayFull.toString()
} })
//set up clear button
const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', function (event) {
        event.preventDefault();
        inputScreen.innerText = ""
        inputArrayFull = []
        inputArrayNum = []
    })