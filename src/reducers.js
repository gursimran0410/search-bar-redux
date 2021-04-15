const initialState = {
  input: "",
  countryListDefault: [],
  countryList: []
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
      return {
        ...state,
        countryList: action.payload
      };
    }
    default:
      return state;
  }
}
