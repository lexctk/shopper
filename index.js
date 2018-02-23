var express                 = require ('express'),
    app                     = express(),
    bodyParser              = require ('body-parser'),
    mongoose                = require ('mongoose'),
    methodOverride          = require ('method-override'),
    expressSanitizer        = require ('express-sanitizer'),
    flash                   = require ('connect-flash'),

    // authentication
    passport                = require ('passport'),
    LocalStrategy           = require ('passport-local'),

    // models
    User                    = require ('./models/user'),

    // routes
    productRoutes           = require ('./routes/product'),
    cartRoutes              = require ('./routes/cart'),
    authenticationRoutes    = require ('./routes/authentication'),
    adminRoutes             = require ('./routes/admin');
    
var databaseURL = process.env.SHOPPERDBURL || 'mongodb://localhost/shopper';
mongoose.connect(databaseURL);
    
app.set ('view engine', 'ejs');

app.use (express.static(__dirname + '/public'));
app.use (bodyParser.urlencoded( { extended : true } ));
app.use (methodOverride('_method'));
app.use (expressSanitizer());
app.use (flash());

// authentication
app.use (require('express-session')({
    cookie: { maxAge: 60000*60*24 },
    secret: process.env.SHOPPERSECRETKEY,
    resave: false,
    saveUninitialized: false
}));
app.use (passport.initialize());
app.use (passport.session());
passport.use (new LocalStrategy(User.authenticate()));
passport.serializeUser (User.serializeUser());
passport.deserializeUser (User.deserializeUser());

// middleware that runs on every routen
app.use (function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash ('error');
    res.locals.success = req.flash ('success');
    next();
});

// use routes
app.use ('/auth', authenticationRoutes);
app.use ('/products', productRoutes);
app.use ('/carts', cartRoutes);
app.use ('/admin', adminRoutes);

// // seeding database
// var seedDB = require ("./seed");
// seedDB();

// root route
app.get('/', function (req, res) {
    res.render('index');
});

// listen
app.listen(process.env.PORT, process.env.IP, function () {
    console.log ('Shopper server started');
});