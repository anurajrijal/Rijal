const errorHandler = (err, req, res, next) => {
  if (err.name === "CastError") {
    return res
      .status(404)
      .json({ success: false, messgae: ` No record with id:${err.value}` });
  }
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res
      .status(404)
      .json({ success: false, messgae: ` Duplicate value for :${field}` });
  }
  if (err.name === "ValidationError") {
    const msgs = Object.vlaue(err.errors).map((e) => e.messgae);
    return res
      .status(400)
      .json({ success: false, messgae: err.messgae || "Server Error" });
  }
};
export default errorHandler;
