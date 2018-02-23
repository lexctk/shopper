var mongoose = require ('mongoose');

//======================
// Product schema
//======================

var productSchema = new mongoose.Schema ({
    name: String,
    image: String,
    price: Number,
    priceSuffix: { type: String, default: '€' },
    description: String,
    category: {type: String, enum: ['Produce', 'Audio', 'Office']}
});

module.exports = mongoose.model('Product', productSchema);