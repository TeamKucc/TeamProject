import React, { useEffect } from 'react';

const Seller = ({ sellhistory }) => {
    if (!sellhistory) return null
    return (
        <>
            {sellhistory.map(index=>
                <div key={index}>
                    _id:{index._id}<br/>
                    user:{index.user}<br/>
                    postNumber:{index.postNumber}<br/>
                </div>
            )}
        </>
    )
}
export default Seller