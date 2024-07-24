export const errorHandler = ((statusCode, message) => {
  const error = new Error(); // it gives as custom error
  error.status = statusCode;
  error.message = message;
  return error;
});

// all is custom
// next(errorHandler(500, 'something went wrong')); like this