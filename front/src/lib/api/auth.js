import client from './client'

export const login = ({userID,password})=>
    client.post('/api/auth/login',{userID,password});

export const register = ({username,password})=>
    client.post('/api/auth/login',{username,password});

export const check=()=>client.get('/api/auth/check');

export const logout =()=>client.post('/api/auth/logout')