const express = require("express")
const router = express.Router()
const {db} = require("../database")

router.get("/", (req, res) => {
   db.all('SELECT * FROM ADDRESS', [], (err, rows) => {
     if (err) {
       console.log("Error", err.message);
       return res.status(500).json({ msg: err.message });
     } else {
         res.json({ data: rows });
     }
   })
})

router.post("/", (req, res) => {
  const query = 'INSERT INTO ADDRESS(USER_ID, NAME, ADDRESS) VALUES(?, ?, ?)';
  db.run(query, [req.body.user_id, req.body.name, req.body.address], function(err) {
    if (err) {
      console.log("Error", err.message);
      return res.status(500).json({ msg: err.message });
    }
    else {
        res.json({ data: { id: this.lastID, name: req.body.name } });
    }
  });
})

module.exports = router