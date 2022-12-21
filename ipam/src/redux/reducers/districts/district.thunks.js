import DistrictsService from "../../../services/district.service";
import actions from "./district.actions";

export const loadDistrictsAsync = () => (dispatch) => {
	dispatch(actions.districtsLoadStart());

	DistrictsService.getAllDistricts()
		.then((response) => dispatch(actions.districtsLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.districtsLoadError(error.message)));
    };