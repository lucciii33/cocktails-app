import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/login.png";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const SingIn = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="">
			<form>
				<div className="mb-3">
					<label  style={{ color: '#C1436D' }}  for="exampleInputEmail1" class="form-label">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
						<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div className="mb-3">
					<label  style={{ color: '#C1436D' }}  for="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1"/>
				</div>
				<div class="mb-3 form-check">
					<input   type="checkbox" className="form-check-input" id="exampleCheck1"/>
					<label  style={{ color: '#C1436D' }}  className="form-check-label" for="exampleCheck1">Check me out</label>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</div>

	);
};
