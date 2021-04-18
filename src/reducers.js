import { countryListAction, countryListDefaultAction } from "./actions";

const initialState = {
  input: "",
  countryListDefault: [],
  countryList: [],
  countriesRendered: 0,
  isLoading: true
};

const addCountries = (countriesRendered, countries) => {
  var arr = [];
  for (var i = 0; i < countriesRendered + 15; i++) {
    if (countries[i]) arr.push(countries[i]);
  }
  return arr;
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "addInput": {
      return {
        ...state,
        input: action.payload
      };
    }
    case "addDefaultCountry": {
      return {
        ...state,
        countryListDefault: action.payload
      };
    }
    case "countryList": {
      return Object.assign({}, state, {
        countryList: addCountries(state.countriesRendered, action.payload),
        countriesRendered: state.countriesRendered + 15,
        isLoading: false
      });
    }
    case "updateLoading": {
      return {
        ...state,
        isLoading: true
      };
    }
    default:
      return state;
  }
}

export async function fetchCountries(dispatch, getState) {
  await fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((data) => {
      dispatch(countryListDefaultAction(data));
      dispatch(countryListAction(data));
    });
}
