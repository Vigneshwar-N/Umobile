import { createStore,combineReducers } from "redux";
import { reducer } from "../reducer/reducer";

const rootReducer = combineReducers({
    reducer:reducer
})

export const store = createStore(rootReducer)