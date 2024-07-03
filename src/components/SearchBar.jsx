import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useRef, useState } from 'react';
import Card from './Card';
// import { useRef } from 'react';
export default function SearchBar({
	handleSearch,
	stateProvince,
	handleSelect,
}) {
	const [search, setSearch] = useState('');
	// console.log(stateProvince);
	// console.log(stateProvince);
	// function searchHandler() {}
	// const ref = useRef(null);
	// console.log(stateProvince);
	function handleSelects(e) {
		handleSelect(e.target.value);
		// console.log(e.target.value);
	}
	return (
		<>
			<InputGroup className='mb-3'>
				<Form.Control
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder='country name'
					aria-label='country name'
					aria-describedby='basic-addon2'
				/>
				<Button
					variant='outline-secondary'
					id='button-addon2'
					onClick={() => handleSearch(search)}
				>
					Search
				</Button>
				<Form.Select
					size='lg'
					className='m-1'
					onChange={(e) => handleSelects(e)}
				>
					<option>none</option>
					{stateProvince.map((_, idx) => {
						return <option key={idx}>{stateProvince[idx]}</option>;
					})}
				</Form.Select>
			</InputGroup>
		</>
	);
}
