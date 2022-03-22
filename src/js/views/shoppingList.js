import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { FullCards } from "./fullCards";
import {Cards} from "./cards"
import { Context } from "../store/appContext";

export const ShoppingList = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="" style={{color:"white"}}>
            <h3 color={"white"}>Drinks</h3>
            
            {store.shopingList.map((item, i) => {
                                    return(
                                        <div key={i}>
                                            <h1 >{item.strDrink}</h1>
                                            <ul>
                                                <li>{item.strIngredient1}</li>
                                                <li>{item.strIngredient2}</li>
                                                <li>{item.strIngredient3}</li>
                                                <li>{item.strIngredient4}</li>
                                                <li>{item.strIngredient5}</li>
                                                <li>{item.strIngredient6}</li>
                                                <li>{item.strIngredient7}</li>
                                            </ul>
                                        </div>

                                    )
                                   
                                })}
            
            
        </div>
    );
};
                    

				
					
                    











ShoppingList.propTypes = {
    match: PropTypes.object
};
