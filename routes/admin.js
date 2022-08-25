
const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);
//just referencing this function, not actually calling it SO just "getAddProduct" not "getAddProduct()"

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

// syntax used when using products array in the route folder... now used in products controller
// exports.routes = router;
// exports.products = products;

router.get('/product-list', productsController.getAdminProductList);

router.get('/edit-product', productsController.getEditProduct);

module.exports = router;