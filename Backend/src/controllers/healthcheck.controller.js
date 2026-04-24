import {ApiResponse }from "../utils/api-response.js"

const healthCheck = async (req, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, {status:"ok"}, "Server is still running" ));
};

export {healthCheck}