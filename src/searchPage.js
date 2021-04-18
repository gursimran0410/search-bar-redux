import React, { useCallback, useRef, useState, useEffect } from "react";
import CountryList from "./countryList";
import SearchBar from "./searchBar";
import { inputAction, countryListAction } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const SearchPage = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input);
  const countryListDefault = useSelector((state) => state.countryListDefault);
  const countryList = useSelector((state) => state.countryList);
  const isLoading = useSelector((state) => state.loading);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      console.log("(((((((((", countryListDefault);
      setFilter(countryListDefault);
    }, 5000);
  }, []);

  const observer = useRef();
  const lastElement = useCallback((node) => {
    console.log("RAN");
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log(filter);
        dispatch(countryListAction(filter));
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  const updateInput = (event) => {
    console.log("FILER INSIDE", countryListDefault);
    setFilter(
      countryListDefault.filter((country) => {
        return country.name.toLowerCase().includes(event.toLowerCase());
      })
    );
    dispatch(inputAction(event));
    dispatch(countryListAction(filter));
  };

  return (
    <>
      <h1>Country List</h1>
      <p>{isLoading && "Currently Loading..."}</p>
      <SearchBar onChange={updateInput} value={input} />
      <CountryList countryList={countryList} lastElement={lastElement} />
    </>
  );
};

export default SearchPage;
