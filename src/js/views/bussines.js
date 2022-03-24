import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage11 from "../../img/id.png";
import rigoImage12 from "../../img/menu.png";
import rigoImage13 from "../../img/conc.png";

export const Bussines = ({ rec }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div>

      <div>
      <h1 className="text-center text-white">The secret formula for succes</h1>
      </div>
      <div className="container d-flex justify-content-evenly">
    
       <div className="boxes border rounded border-danger bg-dark joshstyles"> 
       <img src={rigoImage13} style={{ width: '100px', height: 'auto' }} />
       <h2 className="bussinesh2">Good Recipes</h2>
         <p className="m-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
          <Link to="/contacts"><button className="button">ask for service</button></Link>
       </div>
       <div className="boxes border rounded border-danger bg-dark joshstyles">
       <img src={rigoImage12} style={{ width: '100px', height: 'auto' }} />
          <h2 className="bussinesh2">Concept</h2>
         <p className="m-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
          <Link to="/contacts"><button className="button">ask for service</button></Link>
       </div>
       <div className="boxes border rounded border-danger bg-dark joshstyles" >
       <img src={rigoImage11} style={{ width: '100px', height: 'auto' }} />
       <h2 className="bussinesh2">Train Staff</h2>
       <p className="m-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
         <Link to="/contacts"><button className="button">ask for service</button></Link>
       </div>
    </div>
    </div>
  );
};

Bussines.propTypes = {
  match: PropTypes.object,
};