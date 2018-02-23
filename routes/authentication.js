var express     = require ('express'),
    router      = express.Router (),
    passport    = require ('passport');
    
var User        = require ('../models/user');

var middleware  = require ('../middleware');

//======================
// Authentication routes
//======================

router.get ('/register', middleware.isLoggedIn, middleware.isAdmin, function (req, res) {
    res.render ('auth/register');
})

router.post ('/register', middleware.isLoggedIn, middleware.isAdmin, function (req, res) {
    User.register (new User ({username: req.body.username, email: req.body.email}), req.body.password, function (error, user) {
        if (error) {
            console.log ('Couldn\'t register ' + error);
            return res.render ('auth/register', {'error': error.message});
        }
        passport.authenticate ('local') (req, res, function (){
            req.flash ('success', 'Welcome back ' + user.username);
            
            if (req.session.returnTo) {
                return res.redirect (req.session.returnTo);
            }
            
            return res.redirect ('/products');
        });
    });
});

// show login form
router.get ('/login', function (req, res) {
    res.render ('auth/login');
});

router.post ('/login', function (req, res, next) {
    passport.authenticate ('local', function (error, user, info) {
        if (error) { 
            return next (error); 
        }
        // Redirect if it fails
        if (!user) { 
            req.flash ('error', error.message);
            return res.redirect ('auth/login'); 
        }
        req.logIn (user, function (error) {
            if (error) { 
                return next (error); 
            }
            
            req.flash ('success', 'Welcome back, ' + user.username);
            // Redirect if it succeeds, to previous page if it exists
            if (req.session.returnTo) {
                return res.redirect (req.session.returnTo);
            }
            
            return res.redirect ('/products');
        });
    }) (req, res, next);
});

router.get ('/logout', function (req, res) {
    req.logout ();
    req.flash ('success', 'You were logged out!');
    res.redirect ('/');
});

module.exports = router;