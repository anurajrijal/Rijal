const errorHandler = (err, req, res, next) => {
  // invalid MongoDB ObjectId
  if (err.name === "CastError") {
    return res.status(404).json({
      success: false,
      message: `No record with id: ${err.value}`,
    });
  }

  // duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({
      success: false,
      message: `Duplicate value for: ${field}`,
    });
  }

  // validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);

    return res.status(400).json({
      success: false,
      message: messages.join(", "),
    });
  }

  // fallback error
  return res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
  