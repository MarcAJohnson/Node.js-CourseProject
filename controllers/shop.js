
exports.getCartPage = (req, res, next) => {
   res.render('shop/cart', { pageTitle: 'Cart', path: '/cart' });
};

exports.getCheckoutPage = (req, res, next) => {
   res.render('shop/checkout', { pageTitle: 'Checkout', path: '/checkout' });
};