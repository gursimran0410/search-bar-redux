import React from "react";
import CountryList from "./countryList";
import SearchBar from "./searchBar";
import { inputAction, countryListAction } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const SearchPage = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input);
  const countryListDefault = useSelector((state) => state.countryListDefault);
  const countryList = useSelector((state) => state.countryList);

  const updateInput = async (event) => {
    const filtered = countryListDefault.filter((country) => {
      return country.name.toLowerCase().includes(event.toLowerCase());
    });
    dispatch(inputAction(event));
    dispatch(countryListAction(filtered));
  };

  return (
    <>
      <h1>Country List</h1>
      <SearchBar onChange={updateInput} value={input} />
      <CountryList countryList={countryList} />
    </>
  );
};

export default SearchPage;
