import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPageAction } from "../actions/pageActions";

const ColorsHeader = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();

  const handlePageChange = (pageName) => {
    dispatch(setPageAction({ page: pageName }));
  };

  const selectedClassName = "selected-page";

  return (
    <div className="secound-header">
      <ul>
        <li
          className={pageState.page == "colors" ? selectedClassName : null}
          onClick={() => handlePageChange("colors")}
        >
          SAVED COLORS
        </li>
        <li
          className={pageState.page == "collections" ? selectedClassName : null}
          onClick={() => handlePageChange("collections")}
        >
          COLLECTIONS
        </li>
      </ul>
    </div>
  );
};

export default ColorsHeader;
