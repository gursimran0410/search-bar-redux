import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateLoading } from "./actions";

const CountryList = ({ countryList = [], lastElement }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <div id="scrollArea">
      {countryList.map((data, index) => {
        if (index === countryList.length - 1) {
          // dispatch(updateLoading(isLoading));
          return (
            <div key={data.name} ref={lastElement}>
              <h1>{data.name}</h1>
            </div>
          );
        } else if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CountryList;
