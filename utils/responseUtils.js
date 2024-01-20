// utils/responseUtils.js

// Function to send a success response
const sendSuccessResponse = (res, data = null, message = 'Success', statusCode = 200) => {
    res.status(statusCode).json({
      success: true,
      data: data,
      message: message,
    });
  };
  
  // Function to send an error response
  const sendErrorResponse = (res, error = 'Internal Server Error', statusCode = 500) => {
    res.status(statusCode).json({
      success: false,
      error: error,
    });
  };
  
  module.exports = {
    sendSuccessResponse,
    sendErrorResponse,
  };
  