import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = ({ rec }) => {
  const { store, actions } = useContext(Context);
  const [icon, setIcon] = useState(false)
  const [addFav, setAddFav] = useState(0)
  const params = useParams();
  return (
    <div className=" container">
      <div className="card " style={{ width: "18rem" }}>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.-frqCpspuqwgiM1c2WufrAHaHE&pid=Api&P=0&w=174&h=166"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{rec.strDrink}</h5>
          <p className="card-text">
            gsssssssssssss
          </p>
          <p className="card-text">
            gddddddddddddddd
          </p>

          <div className="row">

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
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  match: PropTypes.object,
};