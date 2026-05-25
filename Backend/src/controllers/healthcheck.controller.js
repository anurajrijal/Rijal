import {ApiResponse }from "../utils/api-response.js"
import { asyncHandler } from "../utils/async-handler.js";

const healthCheck = asynchandler(async (req, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, {status:"ok"}, "Server is still running" ));
});

export {healthCheck}