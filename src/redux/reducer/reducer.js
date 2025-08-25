import { data, paymentOptions } from "../../constants/data"
import { SET_ACTIVE_CATEGORY, SET_ARROW, SET_FILTERED_SPEED, SET_FILTERED_VALUE, SET_IS_FILTERED, SET_IS_FILTERED_CLOSE, SET_LAST_RECHARGE, SET_NUMBER, SET_SEARCH_FILTER, SET_SELECTED_PAYMENT, TOGGLE_MODAL_VISIBLE } from "../actionTypes"


const initialState = {
    number: '',
    search: '',
    data,
    filteredData: undefined,
    filteredSpeed: undefined,
    isFilter: false,
    activeCategory: '',
    isModal: false,
    paymentOptions,
    isArrowDown: false,
    isSelected: false,
    selectedPayment: '',
    isLastRecharged: undefined
}

export const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_NUMBER: {
            return {
                ...state,
                number: payload
            }
        }
        case SET_SEARCH_FILTER: {
            return {
                ...state,
                search: payload
            }
        }
        case SET_FILTERED_VALUE: {
            return {
                ...state,
                filteredData: payload
            }
        }
        case SET_FILTERED_SPEED: {
            return {
                ...state,
                filteredSpeed: payload
            }
        }
        case SET_IS_FILTERED: {
            return {
                ...state,
                isFilter: !state.isFilter
            }
        }
        case SET_IS_FILTERED_CLOSE: {
            return {
                ...state,
                isFilter: false,
                search: '',
                filteredData: undefined,
                filteredSpeed: undefined,

            }
        }
        case SET_ACTIVE_CATEGORY: {
            return {
                ...state,
                activeCategory: payload
            }
        }
        case TOGGLE_MODAL_VISIBLE: {
            return {
                ...state,
                isModal: payload
            }
        }
        case SET_LAST_RECHARGE: {
            let lastRechargedIndex;

            const updatedData = state.data.map((item, index) => {
                if (item.price === payload) {
                    lastRechargedIndex = index;
                    return {
                        ...item,
                        isLastRecharged: true,
                        onlyForYou: { label: "", description: "" },
                    };
                }
                return {
                    ...item,
                    isLastRecharged: false,
                };
            });

            return {
                ...state,
                data: updatedData,
                isLastRecharged: lastRechargedIndex
            };
        }
        case SET_SELECTED_PAYMENT: {
            return {
                ...state,
                selectedPayment: payload
            }
        }
        default:
            return state
    }

}