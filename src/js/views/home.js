import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/3img.png";
import rigoImage5 from "../../img/img5.png";
import "../../styles/home.css";
import { FullCards } from "./fullCards";
import rigoImage6 from "../../img/img6.png";
import rigoImage7 from "../../img/img7.png";

export const Home = () => (
	<div className="container py-5">
		<div className="row d-flex align-items-center">
			<div className="col-sm-12 col-md-6">
				<h1 className="left fw-bold text-center">The Drink Link</h1>
				<h2 className="left text-center">Your one-stop shop for your livers demise</h2>
				<p className="left text-center">The Drink Link users will be able to search for many drink recipes by liqour type, drink style, and ingredient count. We also proudly offer our registered users the ability to save recipes for later, generate a shopping list based on chosen recipes, and access to bartending tips and tricks. Sign up today!</p>
				<div className="d-grid gap-2 d-flex justify-content-md-center">
					<Link to="/recipeBrowser">
					<button className="button text-center" style={{ backgroundColor: '#C1436D', border: 'none' }}>Recipe Browser</button>
					</Link>
					<Link to="/popularDrinks">
						<button className="button text-center" style={{ backgroundColor: '#C1436D', border: 'none' }}>Popular cocktails</button>
					</Link>
				</div>
			</div>
			<div className="col-sm-12 col-md-6 ">
				<img src={rigoImage} style={{ width: '600px', height: 'auto' }} />
			</div>
		</div>
		<div className="d-flex row">

		<div className="col-sm-12 container border rounded bg-dark mt-4 mb-4 joshstyles random-drink col-12 text-center" style={{ width: '400px', height: 'auto' }}>
		<img src={rigoImage5} style={{ width: '250px', height: 'auto' }} />
		<h2 className="left text-center">Don't know what to drink?</h2>

		<p className="left text-center">Hit that button and let us chose an amazing Drink for you!</p>
		<Link to="/randomDrink">
			<button className="button text-center m-2" style={{ backgroundColor: '#C1436D', border: 'none' }}>Get a Random Drink</button>
		</Link>
		</div>



		<div className="col-sm-12 container border rounded bg-dark mt-4 mb-4 joshstyles random-drink col-12 text-center" style={{ width: '400px', height: 'auto' }}>
		<img src={rigoImage7} style={{ width: '250px', height: 'auto' }} />
		<h2 className="left text-center">Bussines consulting</h2>

		<p className="left text-center">Are you opening a bar? let us help you we are experts</p>
		<Link to="/bussines">
			<button className="button text-center m-2" style={{ backgroundColor: '#C1436D', border: 'none' }}>see more info</button>
		</Link>
		</div>


		<div className=" col-sm-12 container border rounded bg-dark mt-4 mb-4 joshstyles random-drink col-12 text-center" style={{ width: '400px', height: 'auto' }}>
		<img src={rigoImage6} style={{ width: '250px', height: 'auto' }} />
		<h2 className="left text-center">make a list here!</h2>

		<p className="left text-center">and get ready for friday night</p>
		<Link to="/shoppinglist">
			<button className="button text-center m-2" style={{ backgroundColor: '#C1436D', border: 'none' }}>Lest do this!</button>
		</Link>
		</div>

		</div>

		<h2 className="left text-center " style={{ marginTop:"4.5rem" }}>This Our Pooular Drinks</h2>

	</div>
);
