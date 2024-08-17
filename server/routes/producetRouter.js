const express = require('express');
const router = express.Router();
const {getallProducts,getSpecificProduct}=require("../controllers/productController.js")

router.route("/").get(getallProducts)
router.route("/product").get(getSpecificProduct)



module.exports = router;


