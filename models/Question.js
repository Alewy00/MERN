const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    quizId: {
        type: integer,
        required: true
    }
}, {
    timestamps: true
})
//  Aaron comment
module.exports = Question = mongoose.model('Question', QuestionSchema);

