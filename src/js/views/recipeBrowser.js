import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cards } from "./cards";

export const RecipeBrowser = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <div  className="">
            <div className="d-flex justify-content-center align-items-center">
                <div className="input-group mb-3 mt-3" style={{ width: '500px', height: 'auto' }}>
                    <input type="text" className="form-control me-2 rounded" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <Link to="/">
                        <button className="button" type="button" id="button-addon1" onClick={actions.getData}>Button</button>
                    </Link>

                </div>
            </div>
            <div className="d-flex">
   {/*test*/}
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            
            </div>
        </div>
    );
};







RecipeBrowser.propTypes = {
    match: PropTypes.object
};
