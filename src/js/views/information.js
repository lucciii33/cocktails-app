import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const Information = ({ rec }) => {
    var rec = useLocation().state;
    const { store, actions } = useContext(Context);
    const [icon, setIcon] = useState(false)
    const [addFav, setAddFav] = useState(0)
    const params = useParams();
    return (
        <div className="container mt-3">
            <div className="card mb-3" style={{ maxWidth: '1100px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={rec.strDrinkThumb} className="img-fluid rounded-start m-1" alt="..." style={{width: '450px', height:'400px'}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 class="card-title">{rec.strDrink}</h5>
                            <p class="card-text">Instructions: {rec.strInstructions}</p>
                            <p className="card-text">Ingredient 1 : {rec.strIngredient1}</p>
                            <p className="card-text">Ingredient 2 :{rec.strIngredient2}</p>
                            <p className="card-text">Ingredient 3 :{rec.strIngredient3}</p>
                            <p className="card-text">Ingredient 4 :{rec.strIngredient4}</p>
                            <p className="card-text">Measure 1 :{rec.strMeasure1}</p>
                            <p className="card-text">Measure 2 :{rec.strMeasure2}</p>
                            <p className="card-text">Measure 3 :{rec.strMeasure3}</p>
                            <p className="card-text">Measure 4 :{rec.strMeasure4}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="d-flex">
                    <button className="button d-flex justify-content-between m-1">
                        how many person drinking?
                    </button>
                    <input type='number' value='number' className="rounded-3" style={{width: '5rem'}} ></input>
            </div>
        </div>
    );
                
};

Information.propTypes = {
    match: PropTypes.object,
};