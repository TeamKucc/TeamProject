import client from './client'

export const login = ({userID,password})=>
    client.post('/api/auth/login',{userID,password})

export const register = ({userID,name,password,email})=>
    client.post('/api/auth/register',{userID,name,password,email,role:1});

export const dregister = ({userID,name,password,email})=>
    client.post()

export const logout =()=>client.get('/api/auth/logout')