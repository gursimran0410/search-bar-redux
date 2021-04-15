export const inputAction = (value) => {
  return {
    type: "addInput",
    payload: value
  };
};

export const countryListDefaultAction = (value) => {
  return {
    type: "addDefaultCountry",
    payload: value
  };
};

export const countryListAction = (value) => {
  return {
    type: "countryList",
    payload: value
  };
};
