var express = require ('express'),
    router  = express.Router ();
    
var Cart    = require ('../models/cart');
    
//======================
// Cart routes
//======================

// INDEX
router.get ('/', function (req, res) {
    Cart.find ({}).populate('product').exec(function (error, carts) {
        if (error || !carts) {
            console.log (error);
            req.flash ('error', 'Something went wrong finding cart items');
            res.redirect ('back');
        } else {
            res.render ('carts/index', {carts : carts});
        }
    });
});

// CREATE
router.post ('/', function (req, res) {
    var cart = req.body.cart;
    Cart.create (cart, function (error, cart) {
        if (error || !cart) {
            console.log (error);
            req.flash ('error', 'Couldn\'t add to cart');
            res.redirect ('back');
        } else {
            req.flash ('success', 'Added to cart');
            res.redirect ('/products');
        }
    });
});

// UPDATE
router.put ('/:id', function (req, res) {
    if (req.body.cart.quantity > 0) {
        Cart.findByIdAndUpdate (req.params.id, req.body.cart, function (error, cart) {
            if (error || !cart) {
                console.log (error);
                req.flash ('error', 'Something went super wrong, couldn\'t find cart to update');
                res.redirect ('back');
            } else {
                res.redirect ('/carts');
            }            
        });
    } else {
        Cart.findByIdAndRemove (req.params.id, function (error, cart) {
            if (error || !cart) {
                console.log (error);
                req.flash ('error', 'Something went super wrong, couldn\'t find cart to delete');
                res.redirect ('back');
            } else {
                req.flash ('success', 'Product deleted from cart!');
                res.redirect ('/carts');
            }
        });
    }
});

// DESTROY 
router.delete ('/:id', function (req, res) {
    Cart.findByIdAndRemove (req.params.id, function (error, cart) {
        if (error || !cart) {
            console.log (error);
            req.flash ('error', 'Something went super wrong, couldn\'t find cart to delete');
            res.redirect ('back');
        } else {
            req.flash ('success', 'Product deleted from cart!');
            res.redirect ('/carts');
        }
    });
});
    
module.exports = router;