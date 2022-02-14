/* eslint-disable */
import React from 'react';
import {HiOutlineRefresh} from "react-icons/hi";

const HelperBtn = (props) => {
  const {
    changeBtn,
    btnText,
  } = props;
  return (
    <>
      <button
        onClick={changeBtn}
        className="convert__btn">
                 <span
                   className="convert__btnText"
                 >
                <HiOutlineRefresh/>
                 </span>
        {btnText}
      </button>
    </>
  );
};

export default HelperBtn;
