require('dotenv').config()
import User from '../../models/user'
import jwt, { decode } from 'jsonwebtoken'

const {JWT_SECRET} = process.env

export const register = (req, res) => {
    const { username, password } = req.body
    let newUser = null

    const create = (user) => {
        if (user) {
            throw new Error('username exists')
        } else {
            return User.create(username, password)
        }
    }

    const count = (user) => {
        newUser = user
        return User.countDocuments({}).exec()
    }


    const assign = (count) => {
        if (count === 1) {
            return newUser.assignAdmin()
        } else {
            return Promise.resolve(false)
        }
    }

    const respond = (isAdmin) => {
        res.json({
            message: 'registered successfully',
            admin: isAdmin ? true : false
        })
    }

    // run when there is an error (username exists)
    const onError = (error) => {
        res.status(409).json({
            message: error.message
        })
    }

    // check username duplication
    User.findByUsername(username)
        .then(create)
        .then(count)
        .then(assign)
        .then(respond)
        .catch(onError)
}


export const login = (req, res) => {
    const { username, password } = req.body


    const check = (user) => {
        if (!user) {
            throw new Error('login 실패');
        } else {
            if (user.verify(password)) {
                const pass = new Promise((res, rej) => {
                    jwt.sign(
                        {
                            _id: user._id,
                            username: user.username,
                            admin: user.admin
                        },
                        JWT_SECRET,
                        {
                            expiresIn: '7d',
                            issuer:'teamkucc',
                            subject:'userinfo'
                        },(err,token)=>{
                            if(err)rej(err)
                            res(token)
                        })
                })
                return pass
            }else{
                throw new Error('login failed')
            }
        }
    }

    const respond = (token)=>{
        res.json({
            message:'login success',
            token
        })
    }

    const onError = (err)=>{
        res.status(403).json({
            message:err.message
        })
    }

    User.findByUsername(username)
    .then(check)
    .then(respond)
    .catch(onError)
}

export const check =(req,res)=>{
    res.json({
        success:true,
        info:req.decode
    })
}

