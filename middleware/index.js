var middlewareObject = {};

// If user is logged in, continue, otherwise redirect to login page
middlewareObject.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    req.flash ('error', 'You need to be logged in to do that!');
    res.redirect ('/auth/login');
};

// If user is admin, continue, otherwise redirect to login page
// Always run after isLoggedIn check
middlewareObject.isAdmin = function (req, res, next) {
    if (req.user.isAdmin) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    req.flash ('error', 'You don\'t have permission to do that!');
    res.redirect ('/auth/login');
};

module.exports = middlewareObject;