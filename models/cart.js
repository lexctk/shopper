var mongoose = require ('mongoose');

//======================
// Cart schema
//======================

var cartSchema = new mongoose.Schema ({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: Number
});

module.exports = mongoose.model ('Cart', cartSchema);