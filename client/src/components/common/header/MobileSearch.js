import React from "react";

const MobileSearch = ({onChange,onClick}) => {
  return (
    <div className="offcanvas-mobile-search-area">
      <form action="#">
        <input type="search" placeholder="Search ..." name="word" onChange={onChange}/>
        <button type="submit" onClick={onClick}>
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
};

export default MobileSearch;
