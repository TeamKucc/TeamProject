import React from 'react';

const History = ({ Sellhistory, user }) => {
    if (!Sellhistory) return null
    console.log(typeof (Sellhistory))
    console.log(Sellhistory)
    return (
        <div>
           
                {Sellhistory.map((index) =>( 
                    <div key={index._id}>
                        {index.productInfo.title}
                    </div>
                ))}
         


        </div>
    )
}
export default History;