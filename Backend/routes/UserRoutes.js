const express = require("express");
const router = express.Router();
const {db} = require("../database")

router.get("/", (req, res) => {
  db.all('SELECT * FROM Users', [], (err, rows) => {
    if (err) {
      console.log("Error", err.message);
      return res.status(500).json({ msg: err.message });
    } else {
        res.json({ data: rows });
    }
  });
});

router.post("/register", (req, res) => {
  console.log(req.body.name, req.body.password, "req body");
  const query = 'INSERT INTO Users(Name, PASSWORD) VALUES(?, ?)';
  db.run(query, [req.body.name, req.body.password], function(err) {
    if (err) {
      console.log("Error", err.message);
      return res.status(500).json({ msg: err.message });
    }
    else {
        res.json({ data: { id: this.lastID, name: req.body.name } });
    }
  });
});

module.exports = router;