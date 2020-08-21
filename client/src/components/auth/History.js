import React from 'react';

const History = ({ history, user }) => {
    if (!history) return null
    console.log(typeof (history))
    console.log(history.res2)
    return (
        <div>
            <div>
                {history.result.postNumber}
            </div>
            {history.res2.title}
            <div>
                <img
                    style={{ minWidth: '300px', width: '300px', height: '240px' }}
                    src={`http://localhost:4000/${history.res2.thumbnails[0]}`}
                />
            </div>
        </div>
    )
}
export default History;