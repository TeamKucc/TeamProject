import React from 'react';

const History = ({ product, payHistory }) => {
    return (
        <div>
            <div>{product}</div>
            <div>{payHistory}</div>
        </div>
    )
}
export default History;