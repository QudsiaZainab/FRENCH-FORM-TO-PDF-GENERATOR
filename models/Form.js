const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    input1: {
        type: String
    },
    input2: {
        type: String
    },
    input3: {
        type: String
    },
    input4: {
        type: String
    },
    input5: {
        type: String
    },
    input6: {
        type: String
    },
    input7: {
        type: String
    },
    input8: {
        type: String
    },
    input9: {
        type: String
    },
    input10: {
        type: String
    },
    input11: {
        type: String
    },
    input12: {
        type: String
    },
    input13: {
        type: String
    },
    input14: {
        type: String
    },
    input15: {
        type: String
    },
    input16: {
        type: String
    },
    input17: {
        type: String
    },
    input18: {
        type: String
    },
    input19: {
        type: String
    },
    input20: {
        type: String
    },
    input21: {
        type: String
    },
    input22: {
        type: String
    },
    input23: {
        type: String
    },
    input24: {
        type: String
    },
    input25: {
        type: String
    },
    input26: {
        type: String
    },
    input27: {
        type: String
    },
    input28: {
        type: String
    },
    input29: {
        type: String
    },
    input30: {
        type: String
    },
    input31: {
        type: String
    },
    input32: {
        type: String
    },
    input33: {
        type: String
    },
    input34: {
        type: String
    },
    input35: {
        type: String
    },
    input36: {
        type: String
    },
    input37: {
        type: String
    },
    input38: {
        type: String
    },
    input39: {
        type: String
    },
    input40: {
        type: String
    },
    input41: {
        type: String
    },
    input42: {
        type: String
    },
    check1: {
        type: Boolean
    },
    check2: {
        type: Boolean
    },
    check3: {
        type: Boolean
    },
    check4: {
        type: Boolean
    },
    check5: {
        type: Boolean
    },
    check6: {
        type: Boolean
    },
    check7: {
        type: Boolean
    },
    check8: {
        type: Boolean
    },
    check9: {
        type: Boolean
    },
    check10: {
        type: Boolean
    },
    check11: {
        type: Boolean
    },
    check12: {
        type: Boolean
    },
    check13: {
        type: Boolean
    },
    check14: {
        type: Boolean
    },
    check15: {
        type: Boolean
    },
    check16: {
        type: Boolean
    },
    check17: {
        type: Boolean
    },
    check18: {
        type: Boolean
    },
    check19: {
        type: Boolean
    },
    check20: {
        type: Boolean
    },
    check21: {
        type: Boolean
    },
    check22: {
        type: Boolean
    },
    check23: {
        type: Boolean
    },
    check24: {
        type: Boolean
    },
    check25: {
        type: Boolean
    },
    check26: {
        type: Boolean
    },
    check27: {
        type: Boolean
    },
    check28: {
        type: Boolean
    },
    check29: {
        type: Boolean
    },
    check30: {
        type: Boolean
    },
    check31: {
        type: Boolean
    },
    check32: {
        type: Boolean
    },
    check33: {
        type: Boolean
    },
    check34: {
        type: Boolean
    },
    check35: {
        type: Boolean
    },
    check36: {
        type: Boolean
    },
    check37: {
        type: Boolean
    },
    check38: {
        type: Boolean
    },
    check39: {
        type: Boolean
    },
    check40: {
        type: Boolean
    },
    check41: {
        type: Boolean
    },
    check42: {
        type: Boolean
    },
    check43: {
        type: Boolean
    },
    check44: {
        type: Boolean
    },
    check45: {
        type: Boolean
    },
    check46: {
        type: Boolean
    },
    check47: {
        type: Boolean
    },
    check48: {
        type: Boolean
    },
    uv: {
        type: Number
    },
    fn: {
        type: String
    }

}, { timestamps: true })

const Form = mongoose.model('Form', formSchema);
module.exports = Form;