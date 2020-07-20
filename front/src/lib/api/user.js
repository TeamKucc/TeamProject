import client from './client'

export const userinfo =_id=>client.get(`/api/user/userinfo/${_id}`)

