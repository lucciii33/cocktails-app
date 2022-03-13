import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/login.png";
import { Context } from "../store/appContext";

import "../../styles/demo.css";
const borderColor = {borderColor: "#C1436D"}
export const Register = () => {
const [formValues, setFormValues ] = useState({
	email: "",
	emailCheck: "",
	password: "",
	passwordCheck: "",
	ageCheck: false,
});

const validate = () => {
	const disable = formValues.email != "" && formValues.emailCheck != "" && formValues.password != "" && formValues.passwordCheck != "" && formValues.ageCheck && formValues.email === formValues.emailCheck && formValues.password === formValues.passwordCheck;
	return disable;
	
}
console.log(formValues.email != "" , formValues.emailCheck != "" , formValues.password != "" , formValues.passwordCheck != "" , formValues.ageCheck , formValues.email === formValues.emailCheck , formValues.password === formValues.passwordCheck);
	
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
						<input value ={formValues.emailCheck} onChange={(e)=> setFormValues({...formValues,emailCheck:e.target.value}) } className="form-control" id="confirmEmailAddress" type="text" placeholder="Confirm Email Address" data-sb-validations="required" />
						<div className="invalid-feedback" data-sb-feedback="confirmEmailAddress:required">Confirm Email Address is required.</div>
					</div>
					<div className="mb-3 mx-auto" style={{ width: '400px', height: 'auto' }}>
						<input value ={formValues.password} onChange={(e)=> setFormValues({...formValues,password:e.target.value}) } className="form-control" id="password" type="text" placeholder="Password" data-sb-validations="required" />
						<div className="invalid-feedback" data-sb-feedback="password:required">Password is required.</div>
					</div>
					<div className="mb-3 mx-auto" style={{ width: '400px', height: 'auto' }}>
						<input value ={formValues.passwordCheck} onChange={(e)=> setFormValues({...formValues,passwordCheck:e.target.value}) } className="form-control" id="confirmPassword" type="text" placeholder="Confirm Password" data-sb-validations="required" />
						<div className="invalid-feedback" data-sb-feedback="confirmPassword:required">Confirm Password is required.</div>
					</div>
					<div className="mb-3 mx-auto" style={{ width: '400px', height: 'auto' }}>
						<input value ={formValues.ageCheck}  onChange={(e)=> setFormValues({...formValues,ageCheck:e.target.value}) } className="form-check-input mx-1" id="iAm21YearsOfAgeOrOlder" type="checkbox" name="" data-sb-validations="required" />
						<label style={{ color: '#C1436D' }} className="form-check-label mx-auto" for="iAm21YearsOfAgeOrOlder">I am 21 years of age or older</label>
						<div className="invalid-feedback" data-sb-feedback=":required">One option is required.</div>
					</div>
					<div className="d-grid mx-auto mb-3" style={{ width: '400px', height: 'auto' }}>
						<button disabled={!validate()} onClick={()=> console.log("funcionando")} className="button btn-lg " style={{backgroundColor: '#C1436D', border: 'none'}} id="submitButton" type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};
