import React, { useState, useEffect } from 'react';
import antd from 'antd'
import ImageGallery from 'react-image-gallery'

const ProductImage = ({ info }) => {
    if (!info) return null;
    const { thumbnails, images } = info
    console.log(info)
    return (
        <div>
            <div>
            {thumbnails.map((image, index) => (
                <div key={index}>
                    <img
                        style={{ minWidth: '300px', width: '300px', height: '240px' }}
                        alt={`productImg-${index}`}
                        src={`http://localhost:4000/${images[index].image}`}
                    />
                </div>
            ))}
            </div>
            {images.map((image, index) => (
                <div key={index}>
                    <img
                        style={{ minWidth: '300px', width: '300px', height: '240px' }}
                        alt={`productImg-${index}`}
                        src={`http://localhost:4000/${images[index].image}`}
                    />
                </div>
            ))}
        </div>
    )
}
export default ProductImage