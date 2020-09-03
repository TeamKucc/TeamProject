import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import QnA from '../../components/qna/QnA'
import { readQnA } from '../../modules/qna';

const QnAContainer = () => {

    const dispatch = useDispatch();
    const { qna } = useSelector(({ qna }) => ({
        qna: qna.qna,
    }))

    useEffect(() => {
        dispatch(readQnA({}));
    }, [dispatch]);

    return (
        <QnA qna={qna} />
    )
}

export default withRouter(QnAContainer);