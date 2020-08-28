import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import BuyerRegister from '../../components/auth/BuyerRegister'
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom'


const BuyerRegisterForm = ({ history }) => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null)
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));
    //인풋 변경이벤트
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        )
    }

    const onSubmit = e => {
        e.preventDefault();
        const { userID,name, password,passwordConfirm,email } = form;

        if ([userID,name,password,passwordConfirm,email].includes('')) {
            setError('빈칸을 모두 입력해주세요')
            return
        }
        if (password !== passwordConfirm) {
            setError('비밀번호가 다릅니다')
            return
        }
        console.log('call')
        dispatch(register({ userID,name,password,email }));
        history.push('/register/complete')
    }

    //컴포넌트가 처음 렌더링 될때 폼 초기화
    useEffect(() => {
        dispatch(initializeForm('register'))
    }, [dispatch]);

    useEffect(() => {
        if (auth) {
            console.log('회원가입성공');;
            console.log(auth);;
            history.push('/')
        }
        if (authError) {
            if (authError.response.status === 409) {
                setError('이미 존재하는 계정입니다')
                return
            }
            setError('회원가입 실패')
            return
        }

    }, [auth, authError, dispatch]);


    useEffect(() => {
        if (user) {
            history.push('/')
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch (e) {
                console.log('localStorage Error')
            }
        }

    }, [history, user])

    return (
        <div>
            <BuyerRegister
                type="register"
                form="form"
                onChange={onChange}
                onSubmit={onSubmit}
                error={error}
            />
        </div>
    )
}

export default withRouter(BuyerRegisterForm);