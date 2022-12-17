import actionTypes from "./districts.actionTypes";
import initialState from "./district.initialState";

const districtsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.DISTRICTS_LOAD_START:
			return {
				...state,
				isLoading: true,
				districts: null,
				errorMessage: null,
			};

		case actionTypes.DISTRICTS_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				districts: payload,
			};

		case actionTypes.DISTRICTS_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};

		default:
			return state;
	}
};

export default districtsReducer;