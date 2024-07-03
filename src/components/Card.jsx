import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import html2canvas from 'html2canvas';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

export default function MyCard({ data }) {
	// localStorage.setItem(
	// 	'states',
	// 	JSON.stringify(Array.from(uniqueStateProvince))
	// );
	// for (let da of JSON.parse(localStorage.getItem('states'))) console.log(da);
	// sendStateProvince(uniqueStateProvince);
	// console.log(uniqueStateProvince);

	// download
	const handleDownloadImage = async (idx) => {
		const element = document.getElementById(idx);
		const canvas = await html2canvas(element);

		const data = canvas.toDataURL('image/jpg');
		const link = document.createElement('a');

		if (typeof link.download === 'string') {
			link.href = data;
			link.download = 'image.jpg';

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} else {
			window.open(data);
		}
	};
	return (
		<Row
			xs={1}
			md={2}
			className='g-4'
		>
			{data.map((_, idx) => (
				<Col key={idx}>
					<Card id={idx}>
						<Card.Img
							variant='top'
							src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22310%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20310%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_190780d5a20%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_190780d5a20%22%3E%3Crect%20width%3D%22310%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22114.01373291015625%22%20y%3D%2287.2%22%3E310x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
						/>
						<Card.Body>
							<Card.Title>{data[idx].name}</Card.Title>
							<Card.Link href={data[idx].domains?.[0]}>
								{data[idx].domains?.[0]}
							</Card.Link>
							<Card.Footer>
								<Button onClick={() => handleDownloadImage(idx)}>
									download
								</Button>
							</Card.Footer>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
}

// export default Card;
// export default function Card() {
// 	return <h1>card</h1>;
// }
