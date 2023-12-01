const moment = require('moment');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articleSchema = new Schema(
    {
    title :{
     type: String,
     required:true,
     minlength: 25,
    },
    desc :{
     type: String,
     required:[true, 'hey'],
     minlength: 100,
    },
    create_at: {
        type: Date,
        default: Date.now,
        get: function (createAt){
            return moment(createAt).format('MMMM Do YYYY, h:mm:ss a');
        }, }
    
 }, 
   { timestamps: true}
   );


 module.exports = mongoose.model('article', articleSchema)