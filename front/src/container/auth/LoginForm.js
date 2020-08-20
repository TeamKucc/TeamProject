import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth'
import AuthForm from '../../components/auth/LoginForm'
import Login from '../../components/auth/Login'
import { check, tempSetUser } from '../../modules/user'

const LoginForm = (props) => {
    const [error, setError] = useState(null)
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }))

    const onChange = (e) => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        )
    }

    const onSubmit = e => {
        e.preventDefault()
        const { userID, password } = form;
        console.log(form)
        dispatch(login({ userID, password }))
    };

    useEffect(() => {
        if (user) {
            props.history.push('/')
        }
        dispatch(initializeForm('login'))
    }, [dispatch])

    useEffect(() => {
        if (authError) {
            console.log('오류발생');
            console.log(authError);
            setError('로그인 실패')
            alert('아이디나 비밀번호가 존재하지 않거나 맞지 않습니다')
            return
        }
        if (auth) {
            console.log(auth)
            props.history.push('/')
            try {
                const userId = localStorage.getItem('userId')
                dispatch(tempSetUser(userId))
            } catch (error) {
                console.log('storage Error error')
            }
        }
    }, [auth, authError]);

    return (
        <div>
            <Login
                type="login"
                form="form"
                onChange={onChange}
                onSubmit={onSubmit}
                error={error}
            />
        </div>
    )
}
export default withRouter(LoginForm)