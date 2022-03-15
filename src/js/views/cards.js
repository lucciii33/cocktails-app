import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = ({ rec }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="container">
      <div className="card " style={{ minWidth: "18rem", maxWidth: "22rem", minHeight: "16rem", margin: '0.7rem',padding: '10px', boxShadow: '5px 10px 18px #6A5ADF'}}>
        <img src={rec.strDrinkThumb} style={{width: "100%", height: '12rem', objectFit: "cover"}}/>
        <div className="card-body">
          <h5 className="card-title">{rec.strDrink}</h5>
          <p className="card-text"></p>
          <p className="card-text">{rec.strInstructions}</p>
          <p></p>
          <p className="card-text">Ingredient 1 : {rec.strIngredient1}</p>
          <p className="card-text">Ingredient 2 :{rec.strIngredient2}</p>
          <p className="card-text">Ingredient 3 :{rec.strIngredient3}</p>
          <p className="card-text">Ingredient 4 :{rec.strIngredient4}</p>
          <p className="card-text">Measure 1 :{rec.strMeasure1}</p>
          <p className="card-text">Measure 2 :{rec.strMeasure2}</p>
          <p className="card-text">Measure 3 :{rec.strMeasure3}</p>
          <p className="card-text">Measure 4 :{rec.strMeasure4}</p>
          <div className="row">

            <div className="col-10">
            <Link to={{ pathname: "information/" + rec.name, state:rec}}>
                <button className="btn btn-primary d-flex justify-content-between m-1">
                  Read articule
                </button>
						</Link>
            </div>
            <div className="col-2">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  match: PropTypes.object,
};