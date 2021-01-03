const mongoose = require("../mongoose");
const Schema = mongoose.Schema;

/*购物车*/
const cartSchema = new Schema({
    products: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
}, {timestamps: true});

module.exports = cartSchema