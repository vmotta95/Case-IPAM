import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDistrictsAsync } from "../redux/reducers/districts/district.thunks";

const DistrictPage = () => {
	const dispatch = useDispatch();
	const { isLoading, districts, errorMessage } = useSelector((state) => state.nome);

	useEffect(() => {
		dispatch(loadDistrictsAsync());
	}, []);

	return (
		<div>
			<h1>District Listing</h1>
			{isLoading && <h3>Loading...</h3>}
			{errorMessage && <h3>{errorMessage}</h3>}
			{districts && districts.map((district) => <h5 key={district.id}>{district.nome}</h5>)}
		</div>
	);
};

export default DistrictPage;