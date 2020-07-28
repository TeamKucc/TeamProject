import React from 'react';

const Product = ({ info,buyProduct }) => {
    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price"> {info}</Descriptions.Item>
                <Descriptions.Item label="Sold">{}</Descriptions.Item>
                <Descriptions.Item label="View"> {}</Descriptions.Item>
                <Descriptions.Item label="Description"> {}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={buyProduct}
                >
                    결제하기
                    </Button>
            </div>
        </div>
    )
}
export default Product;