import client from './client'

export const userinfo = _id => client.get(`/api/user/userinfo/${_id}`)

export const userupdate = ({ userID, name, password, email, _id }) =>
    client.post('/api/user/userUpdate', { userID, name, password, email, _id });

export const gethistory = user => client.post('/api/user/gethistory', { user })

export const sellerHistory = user=>client.post('/api/user/sellerHistory',{user})

export const makeDeal = ({ user, product }) => client.post('/api/user/makeDeal', { user, product })

export const joinDeal = user => client.post('/api/user/joinDeal', { user })



