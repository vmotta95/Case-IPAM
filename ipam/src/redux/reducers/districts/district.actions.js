import actionTypes from "./districts.actionTypes";

const districtsLoadStart = () => ({
	type: actionTypes.DISTRICTS_LOAD_START,
});

const districtsLoadSuccess = (districts) => ({
	type: actionTypes.DISTRICTS_LOAD_SUCCESS,
	payload: districts,
});

const districtsLoadError = (errorMessage) => ({
	type: actionTypes.DISTRICTS_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	districtsLoadStart,
	districtsLoadSuccess,
	districtsLoadError,
};