import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = ({ data }) => {
  const { store, actions } = useContext(Context);
  const [icon, setIcon] = useState(false)
  const [addFav, setAddFav] = useState(0)
  const params = useParams();
  return (
    <div className=" container">
      <div className="card " style={{ width: "18rem" }}>
        <img
          src=""
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">gg</h5>
          <p className="card-text">
            g
          </p>
          <p className="card-text">
            g
          </p>
          <p className="card-text">
            g
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
              <button>
              click 
              </button>
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