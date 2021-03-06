var mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    product_type: {
        type: String,
        enum: [
            'COFFEE_POD_LARGE',
            'COFFEE_POD_SMALL',
            'ESPRESSO_POD',
            'COFFEE_MACHINE_LARGE',
            'COFFEE_MACHINE_SMALL',
            'ESPRESSO_MACHINE'
        ],
        required: true
    },
    water_line_compatible: {
        type: Boolean,
        default: false
    },
    coffe_flavor: {
        type: String,
        enum: [
            '',
            'COFFEE_FLAVOR_VANILLA',
            'COFFEE_FLAVOR_CARAMEL',
            'COFFEE_FLAVOR_PSL',
            'COFFEE_FLAVOR_MOCHA',
            'COFFEE_FLAVOR_HAZELNUT'
        ],
    },
    pack_size: {
        type: Number,
        enum: [
            1,
            3,
            5,
            7
        ],
        default: 0
    },
    model: {
        type: String,
        default: "Unspecified"
    },
    sku: {
        type: String,
    },
    createdAt: {
        type: Date,
    }
});

module.exports = mongoose.model('Product', productSchema);
