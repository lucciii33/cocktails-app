import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage9 from "../../img/iconcheck.png";

export const RegisterSucc = ({ rec }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="container">
        <img src={rigoImage9}></img>
      <h1>your registration have been succed</h1>
      <p>go to your email and check the link</p>
    </div>
  );
};

RegisterSucc.propTypes = {
  match: PropTypes.object,
};