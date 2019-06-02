const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Posts = new Schema({
    title_name: {
        type: String
      },
      text_name: {
        type: String
    }
},{
    collection: 'posts'
});
module.exports = mongoose.model('Posts', Posts);