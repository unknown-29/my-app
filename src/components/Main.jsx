import { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import SearchBar from './SearchBar';
export default function Main() {
	const [data, setData] = useState([]);
	const [filterData, setFilterData] = useState([]);
	const [stateProvince, setStateProvince] = useState([]);

	// let flag = false;
	// function sendStateProvince(uniqueStateProvince) {
	// 	console.log(uniqueStateProvince);
	// 	// setStateProvince(uniqueStateProvince);
	// }
	function handleSearch(search) {
		// console.log(search);
		// setSearchVal(search);
		axios
			.get('http://universities.hipolabs.com/search?country=' + search)
			.then((res) => {
				// console.log(
				// 'http://universities.hipolabs.com/search?country=' + country
				// );
				// console.log(res.data);
				setData(res.data);
			});
		// get unique state-province for the given country
		// flag = true;
	}
	let tmp = [];
	function handleSelect(selectedStateProvince) {
		data.filter((d) => d['state-province'] == selectedStateProvince);
	}
	useEffect(() => {
		const uniqueStateProvince = new Set();
		for (let d of data) {
			if (d['state-province'] != null)
				uniqueStateProvince.add(d['state-province']);
		}
		setStateProvince(Array.from(uniqueStateProvince));
	}, [data]);
	return (
		<>
			<SearchBar
				handleSearch={handleSearch}
				stateProvince={stateProvince}
				handleSelect={handleSelect}
			/>
			<Card
				data={data}
				// filterData={filterData}
				// selectedStateProvince={stateProvince}
			/>
		</>
	);
}
