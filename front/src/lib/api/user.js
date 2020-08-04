import client from './client'

export const userinfo = _id => client.get(`/api/user/userinfo/${_id}`)

export const userupdate = ({ userID, name, password, email }) =>
    client.post('/api/user/userUpdate', { userID, name, password, email });

export const gethistory = user => client.post('/api/user/gethistory', { user })



