// middleware/errorMiddleware.js

const errorMiddleware = (err, req, res, next) => {
  // ✅ Remove the try-catch block - it's not needed here
  let error = { ...err };
  error.message = err.message;

  console.log("Error:", err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = new Error(message);
    error.statusCode = 404;
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new Error(message);
    error.statusCode = 400;
  }

  // ✅ Send the response
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal server error';

  res.status(statusCode).json({
    success: false,
    message: message,
    // Include stack trace in development only
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
  });
};

export default errorMiddleware;