import React from 'react';
import styled from 'styled-components'
import Responsive from '../common/Responsive';


const ProductBlock = styled(Responsive)`
    margin-top:3rem;
`

const Product = ({ info, buy }) => {
    if (!info) return null;
    const { stock, price, discount, title } = info
    return (
        <ProductBlock>
            <div>
                <div>제목:{title}</div>
                <div>가격:{price}</div>
                <div>할인가:{discount}</div>
                <div>재고:{stock}</div>
                <br />
                <br />
                <br />
                <div>
                </div>

                <button onClick={buy}>
                    결제하기
                    </button>
            </div>
        </ProductBlock>
    )
}
export default Product;