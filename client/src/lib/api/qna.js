import client from './client';

export const questionUpload = ({ user, userID, type, title, question }) => client.post('/api/qna/questionUpload', { user, userID, type, title, question });

export const answerUpload = ({ id, answer }) => client.post('/api/qna/answerUpload', { id, answer });

export const readQnA = ({ user, userID, type, title, created }) => client.get('/api/qna/readQnA', { user, userID, type, title, created });

export const qnaDetail = (id) => client.post(`/api/qna/qnaDetail/${id}`);