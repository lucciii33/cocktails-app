import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="row bg-dark align-items-baseline">
			<div className="col-4">
				<Link to="/">
					<h6 className="m-3">Cheers & Share</h6>
				</Link>
			</div>
			<div className="d-flex col-8 justify-content-end">

				<nav className="navbar m-2">
					<Link to="/register">
							<button className="button m-2">Register</button>
					</Link>
					<Link to="/signin">
							<button className="button m-2">Login</button>
					</Link>
					
				</nav>
			</div>

		</div>
	);
};
