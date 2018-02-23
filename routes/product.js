var express     = require ('express'),
    router      = express.Router ();
    
var Product     = require ('../models/product');

var middleware  = require ("../middleware");
    
//======================
// Product routes
//======================

// INDEX
router.get ('/', function (req, res) {
    Product.find ({}, function (error, products) {
        if (error) {
            console.log (error);
            req.flash ('error', 'Something went wrong finding products');
            res.redirect ('back');
        } else {
            res.render ('products/index', {products : products});
        }
    });
});

// INDEX category
router.get ('/category/:category', function (req, res) {
    req.params.category = req.params.category.charAt(0).toUpperCase() + req.params.category.slice(1);
    Product.find ({category : req.params.category}, function (error, products) {
        if (error) {
            console.log (error);
            req.flash ('error', 'Something went wrong finding products');
            res.redirect ('back');
        } else {
            res.render ('products/index', {products : products});
        }
    });    
});


// NEW
router.get ('/new', middleware.isLoggedIn, middleware.isAdmin, function (req, res) {
    res.render ('products/new', {Product : Product});
});

// CREATE
router.post ('/', middleware.isLoggedIn, middleware.isAdmin, function (req, res) {
    var product = req.body.product;
    Product.create (product, function (error, product) {
        if (error || !product) {
            console.log (error);
            req.flash ('error', 'Couldn\'t add product');
            res.redirect ('back');               
        } else {
            req.flash ('success', 'Added new product!');
            res.redirect ('/products');            
        }
    });
});

// SHOW
router.get ('/:id', function (req, res) {
    var isModal = false;
    if (req.query.modal) {
        isModal = true;
    }
    Product.findById (req.params.id, function (error, product) {
        if (error || !product) {
            console.log (error);
            req.flash ('error', 'Something went super wrong, couldn\'t find the product');
            res.redirect ('back');
        } else {
            res.render ('products/show', {product : product, isModal : isModal});
        }
    });
});

// EDIT
router.get ('/:id/edit', middleware.isLoggedIn, middleware.isAdmin, function (req, res) {
    Product.findById (req.params.id, function (error, product) {
        if (error || !product) {
            console.log (error);
            req.flash ('error', 'Something went super wrong, couldn\'t find product to edit');
            res.redirect ('back');
        } else {
            res.render ('products/edit', {product : product, Product : Product});
        }
    });
});

// UPDATE
router.put ('/:id', middleware.isLoggedIn, middleware.isAdmin, function (req, res) {
    var product = req.body.product;
    Product.findByIdAndUpdate (req.params.id, product, function (error, product) {
        if (error || !product) {
            console.log (error);
            req.flash ('error', 'Something went super wrong, couldn\'t find product to update');
            res.redirect ('back');
        } else {
            res.redirect ('/products/' + req.params.id);
        }
    });
});

// DESTROY 
router.delete ('/:id', middleware.isLoggedIn, middleware.isAdmin, function (req, res) {
    Product.findByIdAndRemove (req.params.id, function (error, product) {
        if (error || !product) {
            console.log (error);
            req.flash ('error', 'Something went super wrong, couldn\'t find product to delete');
            res.redirect ('back');
        } else {
            req.flash ('success', 'Product deleted!');
            res.redirect ('/products');
        }
    });
});


module.exports = router;