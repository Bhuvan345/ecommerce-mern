const jwtProvider = require("../config/jwtProvider.js");
const userService = require("../services/user.service.js");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return req.status(404).send({ error: "token not found..." });
    }

    const userId = jwtProvider.getUserIdFromToken(token);
    // console.log("Token:", token);
    const user = await userService.findUserById(userId);
    // console.log("User ID:", userId);

    req.user = user;
    // console.log(this.toString(req));
    next();
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = authenticate;
