import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import QnA from '../../components/qna/QnA';
import { readQnA } from '../../modules/qna';
import { userId } from '../../modules/auth';

const QnAContainer = () => {
    
    const dispatch = useDispatch();
    const { qna } = useSelector(({ qna }) => ({
        qna: qna.qna,
    }))

    useEffect(() => {
        dispatch(readQnA({}));
    }, [dispatch]);

    const userId = (id) => {
        console.log(id)
        dispatch(
            userId(id)
        )
    }

    return (
        <QnA qna={qna} userId={userId} />
    )
}

export default withRouter(QnAContainer);