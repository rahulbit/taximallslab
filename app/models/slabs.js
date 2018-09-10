


const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let slabSchema = new Schema({


    slabid:{
        
        type:'String',
       unique:'true'
    },

    startdate: {

        type: 'Date',
        default: ''

    },

    minslab: {

        type: 'Number',
        default: ''
    },

    minslab1: {

        type: 'Number',
        default: ''
    },

    maxslab: {

        type: 'Number',
        default: ''
    },

    minslabvalue: {
        type: 'Number',
        default: ''
    },
    minslabvalue1: {
        type: 'Number',
        default: ''
    },

    maxslabvalue: {
        type: 'Number',
        default: ''
    },

   

     





})

mongoose.model('slabs', slabSchema)