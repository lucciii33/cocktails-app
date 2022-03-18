import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/login1.png";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const SignIn = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container border rounded border-danger bg-dark mt-4 mb-4 joshstyles" style={{ width: '500px', height: 'auto' }}>
			<img className="rounded mx-auto d-block" src={rigoImage} style={{ width: '400px', height: 'auto' }} />
			<div className="container px-5">
				<form id="contactForm">
					<div className="mb-3 mx-auto" style={{ width: '400px', height: 'auto' }}>
						<input className="form-control" id="emailAddress" type="text" placeholder="Email Address" data-sb-validations="required" />
						<div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
					</div>
					<div className="mb-3 mx-auto" style={{ width: '400px', height: 'auto' }}>
						<input className="form-control" id="password" type="text" placeholder="Password" data-sb-validations="required" />
						<div className="invalid-feedback" data-sb-feedback="password:required">Password is required.</div>
					</div>
					<div className="d-grid mx-auto mb-3" style={{ width: '400px', height: 'auto' }}>
						<button className="button btn-lg" style={{ backgroundColor: '#C1436D', border: 'none' }} id="submitButton" type="submit"  data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
					</div>
				</form>
				<div className="modal" tabindex="-1">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Modal title</h5>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<p>Modal body text goes here.</p>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
