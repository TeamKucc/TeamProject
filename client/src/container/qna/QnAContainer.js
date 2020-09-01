import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import QnA from '../../components/qna/QnA'

const QnAContainer = ({}) => {
    return (
        <QnA />
    )
}

export default withRouter(QnAContainer);