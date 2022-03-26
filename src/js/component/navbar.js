import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid ">
			<Link to="/">
				<h6 className="logo navbar-brand m-3">The Drink Link</h6>
			</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-xs-block">
						<li className="nav-item ms-auto">

								<Link to="/register">
									<button className="button m-2">Register</button>
								</Link>
							
						</li>
						<li className="nav-item ms-auto">
							<Link to="/signin">
								<button className="button m-2">Login</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

{/* <div className="col-4">
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
</div> */}