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
        <div className="container">
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={rec.strDrinkThumb} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 class="card-title">{rec.strDrink}</h5>
                            <p class="card-text">{rec.strInstructions}</p>
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
            <div className="col-10">
                <Link to={{ pathname: "information/" }}>
                    <button className="btn btn-primary d-flex justify-content-between m-1">
                        information
                    </button>
                </Link>
            </div>
            <div className="col-2">
            </div>
        </div>
    );
};

Information.propTypes = {
    match: PropTypes.object,
};