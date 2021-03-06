var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const notionSchema = new Schema({
    title: String,
    notion: String,
    goals: String,
    songName: String,
    email: String,
    moodRating: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        default: 10
    }

});

module.exports = mongoose.model('Notion', notionSchema); 