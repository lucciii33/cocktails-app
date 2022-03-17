import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/login.png";
import { Context } from "../store/appContext";

import "../../styles/demo.css";
const borderColor = {borderColor: "#C1436D"}
export const Register = () => {
	const { store, actions } = useContext(Context);
const [formValues, setFormValues ] = useState({
	email: "",
	password: "",
	ageCheck: false,
});


	
	return (
		<div className="container border rounded bg-dark mt-4 mb-4 joshstyles"  style={{ width: '500px', height: 'auto' }}>
			<img className="rounded mx-auto d-block" src={rigoImage} style={{ width: '400px', height: 'auto' }} />
			<div className="container px-5">
				<form id="contactForm">
					<div className="mb-3 mx-auto" style={{ width: '400px', height: 'auto' }}>
						<input value ={formValues.email} onChange={(e)=> setFormValues({...formValues,email:e.target.value}) } className="form-control" id="emailAddress" type="text" placeholder="Email Address" data-sb-validations="required" />
						<div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
					</div>
					<div className="mb-3 mx-auto" style={{ width: '400px', height: 'auto' }}>
						<input value ={formValues.password} onChange={(e)=> setFormValues({...formValues,password:e.target.value}) } className="form-control" id="password" type="text" placeholder="Password" data-sb-validations="required" />
						<div className="invalid-feedback" data-sb-feedback="password:required">Password is required.</div>
					</div>
					<div className="mb-3 mx-auto" style={{ width: '400px', height: 'auto' }}>
						<input value ={formValues.ageCheck}  onChange={(e)=> setFormValues({...formValues,ageCheck:e.target.value}) } className="form-check-input mx-1" id="iAm21YearsOfAgeOrOlder" type="checkbox" name="" data-sb-validations="required" />
						<label style={{ color: '#C1436D' }} className="form-check-label mx-auto" for="iAm21YearsOfAgeOrOlder">I am 21 years of age or older</label>
						<div className="invalid-feedback" data-sb-feedback=":required">One option is required.</div>
					</div>
					<div className="d-grid mx-auto mb-3" style={{ width: '400px', height: 'auto' }}>
						<span onClick={()=> actions.registerUsers(formValues)} className="button btn-lg " type='text' style={{backgroundColor: '#C1436D', border: 'none'}} id="submitButton">Submit</span>
					</div>
				</form>
			</div>
		</div>
	);
};
