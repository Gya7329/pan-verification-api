const { panDATA } = require("./panJSON");

const getPanCardDetails = (req, res) => {
  try {
    if (req.body.pan) {
      const pan = req.body.pan;
      // const getPanDetails = fetch('https://api.tykd.app/v1/pan/verify', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json',
      //     }
      //     ,body: JSON.stringify({
      //         pan: pan,
      //     }) // body data type must match "Content-Type" header
      // })
      const secret__header = req.headers.secret;
      if (secret__header === "1234567890") {
        const getPanDetails = panDATA.find((panData) => panData.pan === pan);
        if (getPanDetails) {
          res.status(200).send(getPanDetails);
        } else {
          res.status(404).send("Not Found");
        }
      } else {
        res.status(401).send("Unauthorized");
      }
    } else {
      res.status(400).send("Body is missing");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
module.exports = {
  getPanCardDetails,
};
