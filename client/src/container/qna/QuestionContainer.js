import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Question from '../../components/qna/Question';
import { questionUpload, changeField } from '../../modules/qna';

const QuestionContainer = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const { user, type, title, question, created } = useSelector(({ user, qna }) => ({
        user: user.user,
        type: qna.type,
        title: qna.title,
        question: qna.question,
        created: qna.created,
        qna: qna.qna,
    }))

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(
            questionUpload({
                user,
                type,
                title,
                question,
            })
        )
    }

    const onChange = (e) => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                key: name,
                value,
            }),
        )
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