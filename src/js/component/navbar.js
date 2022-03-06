import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="row">
			<div className="col-4">
				<Link to="/">
					<h6 className="">Cheers & Share</h6>
				</Link>
			</div>
			<div className=" d-flex col-8 justify-content-end">

				<nav className="navbar m-2">
						<form className="d-flex m-3">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
								<button className="btn btn-outline-success" type="submit">Search</button>
						</form>
					<Link to="/register">
							<button className="btn btn-outline-success m-2" style={{Color: '#C1436D', borderColor: '#C1436D'}}>register</button>
					</Link>
					<Link to="/signin">
							<button className="btn btn-outline-success">login</button>
					</Link>
					
				</nav>
			</div>

		</div>
	);
};
