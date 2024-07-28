// getItem gets a value from local storage using the key 'storedNumber'

let currentCount = localStorage.getItem('storedNumber') || 0;
// get the current value of the counter from the dom
currentCount = document.getElementById("count").innerText;

// function to increment the value of counter
function doIncrement(){
    console.log("doIncrement() function called..");
    let currIncrement = ++currentCount;
    document.getElementById("count").innerText = currIncrement;
    localStorage.setItem('storedNumber', currIncrement);
}

// function to decrement the value of counter
function doDecrement(){
    console.log("doDecrement() function called..");
    if (currentCount == 0) return;
    let currDecrement = --currentCount;
    document.getElementById("count").innerText = currDecrement;
    localStorage.setItem('storedNumber', currDecrement);
}