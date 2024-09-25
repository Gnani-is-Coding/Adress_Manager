const express = require("express")
const router = express.Router()

router.get("/", () => {
    console.log("API endpoint")
    return {"msg":"API"}
})

module.exports = router