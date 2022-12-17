import { combineReducers } from "redux";
import districtsReducer from "./districts/district.reducer";

const rootReducer = () =>
	combineReducers({
		districts: districtsReducer,
	});

export default rootReducer