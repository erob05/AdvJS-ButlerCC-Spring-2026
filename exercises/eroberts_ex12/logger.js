// first middleware function
const logger = (req, res, next)=>{
    console.log("Logged."); // writes 'Logged' in the console
    next(); // tells the server to move on to the next middleware function
}

module.exports = logger;