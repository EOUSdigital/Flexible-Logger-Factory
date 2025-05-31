//TODO 📚 Module 4 - Lesson 07.02: Function Declaration vs. Function Expression - Challenge

//TODO  🛠️ Step 4: Project Challenge — Flexible Logger Factory

//* 🧠 Goal:

//  Build a reusable function that returns other functions using both a function declaration and a function expression, depending on context.

//? We will practice:
//  • When and how to use declarations vs expressions.
//  • How to store functions in variables.
//  • How to return and call nested functions.

//* 📋 Requirements

//? 🔹 1. Create a function declaration named createLogger()
//  • Use a function declaration, not an expression
//  • It should return an inner function

//? 🔹 2. Inside createLogger(), declare a variable using a function expression
//  • Name it logMessage
//  • This inner function should take a message and log: "LOG: <message>"

//? 🔹 3. Return logMessage from createLogger()

//? 🔹 4. Use the following function:

//  const Logger = createLogger();                                  //  Creates the logger
//  Logger("This is a test");                                       //  Logs:   LOG: This is a test

//* 🧠 Bonus (Optional):
//  • Add another inner function using a function declaration called logWarning(message)
//  • Allow the returned logger to also call logger.warn("Careful!")

//! Solution

//  Function declaration that creates and returns a logger
function createLogger() {

    // Function expression that logs messages with a standard prefix
    const logMessage = function(message) {

        // log the message
        console.log(`LOG: ${message}`);

        //  Display in browser
        displayInBrowser(message, "log");
    }

    // Function declaration that logs warnings with a different prefix
    function logWarning(message) {
        
        // warn the massage
        console.warn(`WARNING: ${message}`);

        // Display in browser
        displayInBrowser(message, "warn");
    }

    //  Function declaration that logs errors messages with a different prefix
    function logError(message) {
        console.error(`ERROR: ${message}`);

        // Display in browser
        displayInBrowser(message, "error");
    }

    // Return all methods so they can be accessed outside
    return {
        log: logMessage,
        warn: logWarning,
        error: logError
    }
}

/* 
// Created a variable that is equal to the createLogger function
const Logger2 = createLogger();

// Call the log method to print a message
Logger2.log("This is a test");  

// Call the warn method to print a warning
Logger2.warn("Careful!")

//  Call the error method to print an error
Logger2.error("Crash detected")
*/

// Function to display log messages in the browser
function displayInBrowser(message, type) {

    //  Get the container element
    const output = document.getElementById("logOutput");

    //  Create a new paragraph element
    const p = document.createElement("p");

    //  Set the text to include type, date and message
    p.textContent = `${type.toUpperCase()} [${new Date().toLocaleTimeString()}]: ${message}`;

    //  Apply styling based on the log type
    if (type === "warn") {
        p.style.color = "orange";
    } else if (type === "error") {
        p.style.color = "red";
    } else {
        p.style.color = "black";
    }

    //  Append the message to the log output area
    output.appendChild(p);
}

//  Create the logger
const logger = createLogger();

//  Attach event listeners to buttons
document.getElementById("logBtn").addEventListener("click", function() {
    const msg = document.getElementById("logInput").value;

    if (!msg) {
        alert("Please enter a message.");
        return;
    }
    
    //  Call the log method
    logger.log(msg);
});

document.getElementById("warnBtn").addEventListener("click", function() {
    const msg = document.getElementById("logInput").value;

    if (!msg) {
        alert("Please enter a message.");
        return;
    }

    //  Call the warn method
    logger.warn(msg);
});

document.getElementById("errorBtn").addEventListener("click", function() {
    const msg = document.getElementById("logInput").value;

    if (!msg) {
        alert("Please enter a message.");
        return;
    }

    //  Call the error method
    logger.error(msg)
});


document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("logOutput").innerHTML = "";
});
