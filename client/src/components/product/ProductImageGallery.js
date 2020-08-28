import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import Swiper from "react-id-swiper";
import Timer from '../common/Timer'

const ProductImageGallery = ({ product }) => {
    const [gallerySwiper, getGallerySwiper] = useState(null);
    const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
    // effect for swiper slider synchronize
    useEffect(() => {
        if (
            gallerySwiper !== null &&
            gallerySwiper.controller &&
            thumbnailSwiper !== null &&
            thumbnailSwiper.controller
        ) {
            gallerySwiper.controller.control = thumbnailSwiper;
            thumbnailSwiper.controller.control = gallerySwiper;
        }
    }, [gallerySwiper, thumbnailSwiper]);
    if (!product) return null;
    const { thumbnails, images } = product
    
    // swiper slider settings
    const gallerySwiperParams = {
        getSwiper: getGallerySwiper,
        spaceBetween: 10,
        loopedSlides: 4,
        loop: true,
        effect: "fade"
    };

    const thumbnailSwiperParams = {
        getSwiper: getThumbnailSwiper,
        spaceBetween: 10,
        slidesPerView: 4,
        loopedSlides: 4,
        touchRatio: 0.2,
        freeMode: true,
        loop: false,
        slideToClickedSlide: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
    };
    return (
        <Fragment>
            <div className="product-large-image-wrapper">
                {product.enable ? (
                        <Timer product={product}/>
                ) : (
                        ""
                    )}
                <LightgalleryProvider>
                    <Swiper {...gallerySwiperParams}>
                        {product.thumbnails.map((img, index) => {
                                return (
                                    <div key={index}>
                                        <LightgalleryItem
                                            group="any"
                                            src={`${img.image.location}`}
                                        >
                                            <button>
                                                <i className="pe-7s-expand1"></i>
                                            </button>
                                        </LightgalleryItem>
                                        <div className="single-image">
                                            <img
                                                src={`${img.image.location}`}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                    </Swiper>
                </LightgalleryProvider>
            </div>
            <div className="product-small-image-wrapper mt-15">
                <Swiper {...thumbnailSwiperParams}>
                    {product.thumbnails.map((images,index) => {
                            return (
                                <div key={index}>
                                    <div className="single-image">
                                        <img
                                            src={`${images.image.location}`}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            );
                        })}
                </Swiper>
            </div>
        </Fragment>
    );
};

ProductImageGallery.propTypes = {
    product: PropTypes.object
};

export default ProductImageGallery;