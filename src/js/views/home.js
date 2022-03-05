import React from "react";
import rigoImage from "../../img/3img.png";
import "../../styles/home.css";

export const Home = () => (
	<div className="container">
		<div className="row d-flex align-items-center">
			<div className="col-6">
				<h1 className="left fw-bold text-center">Cheers & Share</h1>
				<h2 className="left text-center">Make a cocktail anywhere</h2>
				<p className="left text-center">suprise your frinds in a easy way,suprise your frinds in a easy way,suprise your frinds in a easy way,suprise your frinds in a easy way,suprise your frinds in a easy way,suprise your frinds in a easy way</p>
				<div className="d-grid gap-2 d-flex justify-content-md-center">

				<button className="btn btn-primary text-center" style={{backgroundColor: '#C1436D', border: 'none'}}>Click for cocktails recipes</button>
				<button className="btn btn-primary text-center" style={{backgroundColor: '#C1436D', border: 'none'}}>information</button>
				</div>
			</div>
			<div className="col-6">
				<img src={rigoImage} style={{width: '600px', height: 'auto'  }}/>
			</div>
		</div>

	</div>
);
