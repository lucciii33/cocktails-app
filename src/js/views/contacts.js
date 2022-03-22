import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage14 from "../../img/Contact.png";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
            <img src={rigoImage14} style={{ width: '400px', height: 'auto' }}/>
            <label>write yor name</label>
			<input></input>
            <label>Write your email</label>
            <input></input>
            <label>Tell us your idea</label>
            <textarea></textarea>

			
		</div>
	);
};

Contacts.propTypes = {
	match: PropTypes.object
};
