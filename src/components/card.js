import React from 'react';

const Card = (props) => {
	return (
		<div className="card">
		  <div className="card-block">
		    <div>
		    	<img className="card-img" src={props.foodPic} alt={props.foodPic} />
		    </div>
		  </div>
		</div>
	)
}

export default Card;
