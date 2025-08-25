import { SET_FILTERED_SPEED, SET_FILTERED_VALUE, SET_IS_FILTERED, SET_NUMBER, SET_SEARCH_FILTER,SET_IS_FILTERED_CLOSE, SET_ACTIVE_CATEGORY, TOGGLE_MODAL_VISIBLE, SET_LAST_RECHARGE, SET_SELECTED_PAYMENT } from "../actionTypes";


export const setNumber = (number) => ({
  type: SET_NUMBER,
  payload: number,
});

export const setSearch = (searchText) => ({
  type: SET_SEARCH_FILTER,
  payload: searchText,
});

export const setFilteredValue = (value) => ({
  type: SET_FILTERED_VALUE,
  payload: value,
});

export const setFilteredSpeed = (speed) => ({
  type: SET_FILTERED_SPEED,
  payload: speed,
});

export const setIsFiltered = (payload) => ({
  type: SET_IS_FILTERED,
  payload
});


export const setIsFilteredClose = () => ({
  type: SET_IS_FILTERED_CLOSE,
});


export const setActiveCategory = (category) => ({
  type: SET_ACTIVE_CATEGORY,
  payload:category
});

export const setToggleModalVisible = (payload) => ({
  type: TOGGLE_MODAL_VISIBLE,
  payload
});

export const setLastRecharge = (planIdOrPrice) => ({
  type: SET_LAST_RECHARGE,
  payload:planIdOrPrice
});

export const setSelectedPayment = (payload) => ({
  type: SET_SELECTED_PAYMENT,
  payload
});
