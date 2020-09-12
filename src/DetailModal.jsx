import React from 'react';
import Modal from 'react-modal';

const DetailModal = ({ data, modal, closeModal }) => {
	const customStyles = {
		content: {
			height: 'auto',
			width: 'auto',
			top: '40%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};
	return (
			<Modal isOpen={modal} style={customStyles}>
				<h2 className='text-center text-success'>User Details</h2>

				<h4>
					Name : <span>{data.name}</span>
				</h4>
				<h4>
					Username: <span>{data.username}</span>
				</h4>
				<h4>
					Email : <span>{data.email}</span>
				</h4>
				<h4>
					Address : <span>{data.address.street}, {data.address.city}</span>
				</h4>
				<h4>
					Phone : <span>{data.phone}</span>
				</h4>
				<h4>
					Website : <span>{data.website}</span>
				</h4>
				<h4>
					Company : <span>{data.company.name}</span>
				</h4>
				<center>
					<button className='btn btn-primary' onClick={closeModal}>
						Close
					</button>
				</center>
			</Modal>
	);
};

export default DetailModal;
