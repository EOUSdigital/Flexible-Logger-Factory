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
    }

    // Created a function declaration
    function logWarning(message) {
        // warn the massage
        console.warn(`WARNING: ${message}`);
    }

    // Return both functions in an object for flexible access
    return {
        log: logMessage,
        warn: logWarning
    }
}

// Created a variable that is equal to the createLogger function
const Logger2 = createLogger();

// Call the log method to print a message
Logger2.log("This is a test");  

// Call the warn method to print a warning
Logger2.warn("Careful!")











