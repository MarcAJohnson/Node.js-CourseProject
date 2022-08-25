const express = require('express');

const productsController = require('../controllers/products');
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', productsController.getProducts);

router.get('/product-list', productsController.getShopProductList);

router.get('/product-detail', productsController.getProductDetail);

router.get('/cart', shopController.getCartPage);

router.get('/checkout', shopController.getCheckoutPage);

module.exports = router;
