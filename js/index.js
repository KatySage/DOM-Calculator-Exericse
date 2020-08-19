'use strict';
//set up variable for item input screen
const inputScreen = document.getElementById('input')
//add click handlers to the numbers clicked
const numberButtons = document.querySelectorAll(".number")
const inputArray = []
numberButtons.forEach(function(element){
    element.addEventListener('click', function (event) {
        event.preventDefault();
        inputArray.push(element.innerHTML)
        inputScreen.innerText += element.innerHTML
        })    
    })


//create an array of the numbers clicked, in order

// add click handlers to the calculation buttons
const operButtons = document.querySelectorAll(".operator")
// const inputArrayOperator = []
operButtons.forEach(function(element){
    element.addEventListener('click', function (event) {
        event.preventDefault();
        let currentValues = inputScreen.innerText;
        let lastCharacter = currentValues[currentValues.length -1];
        if (lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "%" || lastCharacter === "x") {
            const newString = currentValues.substring(0,currentValues.length -1) + element.innerHTML;
            inputScreen.innerText = newString;
        } else if (currentValues.length == 0) {
            alert("TYPE A NUMBER FIRST");
        } else {
            inputScreen.innerText += element.innerHTML;
        }
        })    
    })

//create an array of the operators

//don't let a user start with the operator
//don't let a user type multiple operators
//add click handler to the equals button


