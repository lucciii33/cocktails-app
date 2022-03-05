import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/login.png";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="">


			<div className="d-flex justify-content-center">
				<div className="row g-2 ">
					<img src={rigoImage} style={{ width: '400px', height: 'auto' }} />
					<div className="col-12">
						<label style={{ color: '#C1436D' }} className="m-2"><h5>Email</h5></label>
						<input type="" placeholder="email" style={{ width: '300px', height: '30px' }}></input>
					</div>
					<div className="col-12">
						<label style={{ color: '#C1436D' }} className="m-2"><h5>password</h5></label>
						<input type="password" placeholder="email" style={{ width: '300px', height: '30px' }}></input>
					</div>
					<div className="col-12">
						<label style={{ color: '#C1436D' }} className="m-2"><h5>Phone</h5></label>
						<input type="text" placeholder="Phone" style={{ width: '300px', height: '30px' }}></input>
					</div>
					<div className="col-12">
						<label style={{ color: '#C1436D' }} className="m-2"><h5>age</h5></label>
						<input type="age" placeholder="Phone" style={{ width: '300px', height: '30px' }}></input>
					</div>
				</div>
			</div>
		</div>
	);
};
