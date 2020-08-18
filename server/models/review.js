import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    id: {
        type: String,
        maxlength: 50,
    },
    write: {
        type: String,
        maxlength: 50,
    }
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;