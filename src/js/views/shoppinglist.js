import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ShoppingList = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<div className="d-flex align-items-center justify-content-center">
                <label className="labelTodo">Dont forget anything</label>
                <input></input>
            </div>
            <div className="d-flex align-items-center justify-content-center">

                <div className="boxTodo"></div>
            </div>
		</div>
	);
};

ShoppingList.propTypes = {
	match: PropTypes.object
};
