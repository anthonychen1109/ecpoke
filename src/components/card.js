import React from 'react';

const Card = (props) => {
	return (
		<div className="card">
		  <div className="card-block">
		  	<div className="card-top">
		    	<h4 className="card-title">{props.foodName}</h4>
		    </div>

		    <div>
		    	<img className="card-img" src={props.foodPic} alt={props.foodPic} />
		    </div>

		    <div className="card-bottom">
		    	<p className="card-text">{props.foodText}</p>
		    </div>
		  </div>
		</div>
	)
}

export default Card;
