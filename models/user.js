var mongoose                = require ('mongoose'),
    passportLocalMongoose   = require ('passport-local-mongoose');

//======================
// User schema
//======================

var userSchema = new mongoose.Schema ({
    username    : { type: String, required: [true, 'Can\'t be blank'], unique: true, index: true},
    email       : { type: String, required: [true, 'Can\'t be blank'], unique: true, index: true},
    password    : String,
    isAdmin     : {type: Boolean, default: false}
}, {timestamps  : true});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model ('User', userSchema);