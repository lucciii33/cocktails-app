import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/login.png";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
	
			<div className="">
				<div className="row g-2 ">
					<div className="">

					<img  className=""src={rigoImage} style={{ width: '400px', height: 'auto' }} />
					</div>

					<div>

					<div className="row">
						<label style={{ color: '#C1436D' }} className="col-4 m-2"><h5>Email</h5></label>
						<input className="col-8" type="" placeholder="email" style={{ width: '300px', height: '30px' }}></input>
					</div>
					<div className="row">
						<label style={{ color: '#C1436D' }} className="col-4 m-2"><h5>password</h5></label>
						<input className="col-8" type="password" placeholder="email" style={{ width: '300px', height: '30px' }}></input>
					</div>
					<div className="row">
						<label style={{ color: '#C1436D' }} className="col-4 m-2"><h5>Phone</h5></label>
						<input className="col-8" type="text" placeholder="Phone" style={{ width: '300px', height: '30px' }}></input>
					</div>
					<div className="row">
						<label style={{ color: '#C1436D' }} className="col-4 m-2"><h5>age</h5></label>
						<input className="col-8" type="age" placeholder="Phone" style={{ width: '300px', height: '30px' }}></input>
					</div>
					</div>
				</div>
			</div>
		
	);
};
