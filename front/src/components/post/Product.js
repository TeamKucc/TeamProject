import React from 'react';

const Product = ({ info, buyProduct }) => {
    return (
        <div>
            <form onSubmit={buyProduct}>
               <div>
                   {info}
               </div>
                <br />
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button size="large" shape="round" type="submit"
                    >
                        결제하기
                    </button>
                </div>
            </form>

        </div>
    )
}
export default Product;