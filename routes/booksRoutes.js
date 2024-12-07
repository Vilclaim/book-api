const express = require("express");
const router = express.Router();
const {
  getAllbooks,   
  getbooksById,
  addbooks,
  updatebooks,
  deletebooks,
} = require("../controllers/booksController");


router.get("/", getAllbooks);
router.get("/:id", getbooksById);
router.post("/", addbooks);
router.put("/:id", updatebooks);
router.delete("/:id", deletebooks);

module.exports = router;