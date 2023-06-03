const router = require("express").Router();
const { getPanCardDetails } = require("./controller");
const isAuthorized = require("./isAuth");

router.post("/getPanCardDetails", [isAuthorized, getPanCardDetails]);

module.exports = router;
