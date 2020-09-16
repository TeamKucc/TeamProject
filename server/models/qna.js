import mongoose, { Schema } from 'mongoose';

const qnaSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  userID: {
    type: String,
  },
  type: {
    type: String,
  },
  title: {
    type: String,
  },
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  }
});

const QnA = mongoose.model('QnA', qnaSchema);
export default QnA;