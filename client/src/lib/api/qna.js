import client from './client';

export const questionUpload = ({ user, type, title, question }) => client.post('/api/qna/questionUpload', { user, type, title, question });

export const answerUpload = ({ id, answer }) => client.post('/api/qna/answerUpload', { id, answer });

export const readQnA = ({ user, type, title, date }) => client.get('/api/qna/readQnA', { user, type, title, date });