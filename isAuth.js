const isAuthorized = (req, res, next) => {
  const token = req?.headers.token;
  console.log(token);
  if (token === "123456") {
    next();
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = isAuthorized;
