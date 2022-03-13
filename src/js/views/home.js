import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/3img.png";
import "../../styles/home.css";
import { FullCards } from "./fullCards";

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
		<div className=" random-drink col-12 text-center">
		<h2 className="left text-center">Don't know what to drink?</h2>
		<p className="left text-center">Hit that button and let us chose an amazing Drink for you!</p>
		<Link to="/randomDrink">
			<button className="button text-center" style={{ backgroundColor: '#C1436D', border: 'none' }}>Get a Random Drink</button>
		</Link>
		</div>

	</div>
);
