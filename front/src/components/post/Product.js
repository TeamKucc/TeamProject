import React from 'react';
import styled from 'styled-components'
import Responsive from '../common/Responsive';


const ProductBlock = styled(Responsive)`
    margin-top:3rem;
`

const Product = ({ info, buyProduct }) => {
    return (
        <ProductBlock>
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
        </ProductBlock>
    )
}
export default Product;