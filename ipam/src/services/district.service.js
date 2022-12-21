import apiClient from "../helper/apiClient";

class DistrictService {
	getAllDistricts = () => apiClient().get("district");
}

export default new DistrictService();