//outsourcing middleware functions as a seperate "controller" files

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
   res.render('admin/add-product', {
      pageTitle: 'Add-Product',
      path: '/admin/add-product'
   });
};

exports.postAddProduct = (req, res, next) => {
   const prod = new Product(req.body.title);
   prod.save();
   res.redirect('/');
};

exports.getAdminProductList = (req, res, next) => {
   res.render('admin/product-list', {
      pageTitle: 'Admin Product List',
      path: '/admin/product-list'
   });
};

exports.getEditProduct = (req, res, next) => {
   res.render('admin/edit-product', {
      pageTitle: 'Edit Product'
   });
};

exports.getProducts = (req, res, next) => {
   Product.fetchAll((products) => {
      res.render('shop/index', {
         prods: products,
         pageTitle: 'Shop',
         path: '/'
      });
   });
};

exports.getShopProductList = (req, res, next) => {
   res.render('shop/product-list', {
      pageTitle: 'Shop Product List',
      path: '/product-list'
   });
}

exports.getProductDetail = (req, res, next) => {
   res.render('shop/product-detail', {
      pageTitle: 'Product Detail'
   });
};

