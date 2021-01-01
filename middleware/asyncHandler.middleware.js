const asyncHandler = (handler) => async (req, res, next) => {
  try {
    await handler(req, res, next);
  } catch (ex) {
    next(ex);
  }
};

export default asyncHandler;
