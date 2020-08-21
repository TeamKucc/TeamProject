import React from "react";
import PropTypes from "prop-types";
import Test from './Test'
const Test2 = ({ children,
    headerContainerClass,
    headerTop,
    headerPaddingClass,
    headerPositionClass
}) => {
    return (
        <>
            <Test
                layout={headerContainerClass}
                top={headerTop}
                headerPaddingClass="header-padding-1"
                headerPositionClass={headerPositionClass}
            />
        </>
    )
}

Test2.propTypes = {
    children: PropTypes.any,
    headerContainerClass: PropTypes.string,
    headerPaddingClass: PropTypes.string,
    headerPositionClass: PropTypes.string,
    headerTop: PropTypes.string
};

export default Test2