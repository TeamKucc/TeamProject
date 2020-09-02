import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Answer from '../../components/qna/Answer'
import { qnaDetail, changeField, answerUpload } from '../../modules/qna';

const AnswerContainer = ({ match, history }) => {

    const dispatch = useDispatch();
    const { qna, answer } = useSelector(({ qna }) => ({
        qna: qna.qna,
        answer: qna.answer
    }))
    const { id } = match.params;

    useEffect(() => {
        dispatch(qnaDetail(id));
    }, [dispatch]);

    const onSubmit = () => {
        if([answer].includes('')){
            alert('답변을 등록해주세요');
            return;
        }
        dispatch(
            answerUpload({
                id,
                answer,
            }),
            alert('답변이 등록되었습니다!'),
            history.push('/qna')
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
        <Answer qna={qna} onChange={onChange} onSubmit={onSubmit} />
    )
}

export default withRouter(AnswerContainer);