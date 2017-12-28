import React, { Component } from 'react';
import Modal from 'react-modal';

//MODAL STYLE
const customStyles = {
	content: {
		margin: 'auto',
		height: '80%',
		width: '80%'
	}
}

class Card extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ modalIsOpen: true })
	}

	closeModal() {
		this.setState({ modalIsOpen: false })
	}
	render() {
		return (
			<div className="card">
			  <div className="card-block">

			    <div>
			    	<img className="card-img"
							src={this.props.foodPic}
							alt={this.props.foodPic}
							onClick={this.openModal}
						/>
						<Modal
							isOpen={this.state.modalIsOpen}
							onRequestClose={this.closeModal}
							style={customStyles}
							>
							<button className="btn btn-danger" onClick={this.closeModal}>X</button>
								<img className="modal-img"
									src={this.props.foodPic}
									alt={this.props.foodPic}
									style={customStyles}
								/>
						</Modal>
			    </div>

			  </div>
			</div>
		)
	}
}

export default Card;
