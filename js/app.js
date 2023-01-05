'use strict';

const operands = ["+", "-", "*", "/", "^",];
let endlessButton = document.getElementById("endless");
let output = document.getElementById("problem");
let enter = document.getElementById("enter");
let answer = document.getElementById("answer");
let num1, num2, operand, string;
let endlessMode = False;

endlessButton.addEventListener("click", function(e) {
    if (endlessMode == False) {
        endlessMode == True;
    } else {
        endlessMode == False
    };
})

function addingHTML() {
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    operand = operands[Math.floor(Math.random() * operands.length)];
    string = document.createTextNode(`${num1} ${operand} ${num2} = `);
    output.appendChild(string);
};

if (endlessMode == True) {
    for (let i = 0; i < 20; i++) {
        addingHTML();
    }
}