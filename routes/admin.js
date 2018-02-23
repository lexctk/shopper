var express = require ('express'),
    router  = express.Router ();
    
var Product = require ('../models/product');
    
//======================
// Admin routes
//======================

router.get ('/print', function (req, res) {
    Product.find ({}, function (error, products) {
        if (error) {
            console.log (error);
            req.flash ('error', 'Something went wrong finding products');
            res.redirect ('back');
        } else {
            res.render ('admin/print', {products : products});
        }
    });
});


module.exports = router;