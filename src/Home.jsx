import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DetailModal from './DetailModal'

const Home = () => {
	const [data, setData] = useState([]);
	const [errmsg, setErrMsg] = useState('');
  const [user, setUser] = useState(null);
  const [modal, setModal] = useState(false)

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(res => setData(res.data))
			.catch(err => setErrMsg(err.message));
	}, []);

	const showDetail = e => {
		const data = JSON.parse(e.target.value);
    setUser(data);
    setModal(true);
  };
  const closeModal = () => {
    setModal(false)
  }

		return (
			<div>
				<ul className='list-group mb-4'>
					{data.map(user => (
						<li
							key={user.id}
							className='list-group-item d-flex justify-content-between'
						>
							{user.name}
							<button
								className='btn btn-info btn-sm'
								value={JSON.stringify(user)}
								onClick={showDetail}
								data-target='#detailModal'
								data-toggle='modal'
							>
								Details
							</button>
						</li>
					))}
				</ul>
        {user ? <DetailModal data={user} modal={modal} closeModal={closeModal} /> : null}
			</div>
		);
	
};

export default Home;
