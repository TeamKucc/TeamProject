import client from './client';

export const login = ({ userID, password }) =>
  client.post('/api/auth/login', { userID, password });

export const register = ({ userID, name, password, email }) =>
  client.post('/api/auth/register', { userID, name, password, email, role: 1 });

export const dregister = ({ userID, name, password, email, business }) =>
  client.post('/api/auth/dregister', {
    userID,
    name,
    password,
    email,
    business,
    role: 0,
  });

export const getUser = () => client.get('/api/auth/getuser');

export const logout = () => client.get('/api/auth/logout');

export const business = ({ business }) =>
  client.post('/api/auth/business', { business });

export const memberDelete = (id) => client.post('/api/auth/memberDelete', {id:id});
export const memberRecover =(id) => client.post('/api/auth/memberRecover', {id:id});