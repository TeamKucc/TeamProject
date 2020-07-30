import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import UserInfo from '../../components/auth/UserInfo';
import { changeField, userInfo, } from '../../modules/auth';
import { userUpdate } from '../../modules/user'
import {withRouter} from 'react-router-dom'
import produce from 'immer'


const UserInfoContainer = ({ match,history }) => {

    const dispatch = useDispatch();
    const [error, setError] = useState(null)
    const { form, auth, authError, user } = useSelector(({ auth }) => ({
        form: auth.userInfo,
        auth: auth.auth,
        authError: auth.authError,
        user: auth.user
    }));
    //인풋 변경이벤트
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'userInfo',
                key: name,
                value
            })
        )
    }

    useEffect(() => {
        try {
            const userId = localStorage.getItem('userId').replace(/['"]+/g, '')
            dispatch(userInfo(userId))
        } catch (error) {
            alert("접근권한이 없습니다")
            history.push('/')
        }
    }, [])

    const onSubmit = e => {
        e.preventDefault();
        const { userID, name, password, passwordConfirm, email } = form;

        if ([userID, name, password, passwordConfirm, email].includes('')) {
            setError('빈칸을 모두 입력해주세요')
            return
        }
        if (password !== passwordConfirm) {
            setError('비밀번호가 다릅니다')
            return
        }
        console.log('call')
        dispatch(userUpdate({ userID, name, password, email }));
    }



    return (
        <>
            <UserInfo onSubmit={onSubmit} onChange={onChange} form={form} user={user} error={error} />

        </>
    )
}

export default withRouter(UserInfoContainer)