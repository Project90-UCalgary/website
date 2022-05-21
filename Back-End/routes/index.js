const express = require('express');
const router = express.Router();

// Mock Data
const home = {
  moto: "askljdnvakljsfnvlksjerv",
  picture: "https://i.imgur.com/5mNOpit.png"
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(home);
});

module.exports = router;
