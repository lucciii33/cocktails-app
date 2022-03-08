import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/3img.png";
import "../../styles/home.css";

export const Home = () => (
	<div className="container py-5">
		<div className="row d-flex align-items-center">
			<div className="col-6">
				<h1 className="left fw-bold text-center">The Drink Link</h1>
				<h2 className="left text-center">Your one-stop shop for your livers demise</h2>
				<p className="left text-center">The Drink Link users will be able to search for many drink recipes by liqour type, drink style, and ingredient count. We also proudly offer our registered users the ability to save recipes for later, generate a shopping list based on chosen recipes, and access to bartending tips and tricks. Sign up today!</p>
				<div className="d-grid gap-2 d-flex justify-content-md-center">
					<Link to="/recipeBrowser">
					<button className="button text-center" style={{ backgroundColor: '#C1436D', border: 'none' }}>Recipe Browser</button>
					</Link>
					<Link to="/register">
						<button className="button text-center" style={{ backgroundColor: '#C1436D', border: 'none' }}>Sign up now!</button>
					</Link>
				</div>
			</div>
			<div className="col-6">
				<img src={rigoImage} style={{ width: '600px', height: 'auto' }} />
			</div>
		</div>
		<div className="recipecards">
			<div className="card" style={{ width: "18rem" }}>
				<img src="https://via.placeholder.com/400x200.png" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
	</div>
);
