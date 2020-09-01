import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Answer from '../../components/qna/Answer'

const AnswerContainer = () => {
    return (
        <Answer />
    )
}

export default withRouter(AnswerContainer);