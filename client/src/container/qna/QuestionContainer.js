import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Question from '../../components/qna/Question';
import { questionUpload, changeField } from '../../modules/qna';

const QuestionContainer = ({ history }) => {

    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const { user, type, title, question } = useSelector(({ user, qna }) => ({
        user: user.user,
        type: qna.type,
        title: qna.title,
        question: qna.question,
        qna: qna.qna,
    }))
    const userID = localStorage.getItem('userName');
    
    const onSubmit = (e) => {
        e.preventDefault();
        if([ type, title, question ].includes('')) {
            setError('빈칸을 모두 입력해주세요');
            return;
        }

        dispatch(
            questionUpload({
                user,
                userID,
                type,
                title,
                question,
            })
        )
        alert('Q&A가 등록되었습니다')
        history.push('/qna')
    }

    const onChange = (e) => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                key: name,
                value,
            }),
        )
        setError('');
    }

    return (
        <Question 
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
        />   
    )

}

export default withRouter(QuestionContainer);