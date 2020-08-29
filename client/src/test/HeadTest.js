import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from '../components/common/Header'

const HeadTest = ({
    headerContainerClass,
    headerTop,
    headerPaddingClass,
    headerPositionClass
}) => {
    return (
        <>
            <Header
                layout={headerContainerClass}
                top={headerTop}
                headerPaddingClass={headerPaddingClass}
                headerPositionClass={headerPositionClass}
            />
        </>
    )
}

HeadTest.propTypes = {
    children: PropTypes.any,
    headerContainerClass: PropTypes.string,
    headerPaddingClass: PropTypes.string,
    headerPositionClass: PropTypes.string,
    headerTop: PropTypes.string
};

export default HeadTest