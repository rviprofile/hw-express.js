const loggerTwo = (request, response, next) => {
    console.log("Log two");
    next()
  };
  
  module.exports = loggerTwo;