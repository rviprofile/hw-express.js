const loggerOne = (request, response, next) => {
  console.log("Log one");
  next()
};

module.exports = loggerOne;