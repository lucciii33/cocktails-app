import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { FullCards } from "./fullCards";
import {Cards} from "./cards"

export const RandomDrink = () => {
    
    const fetchRes = async () => {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const data = await res.json();
        setRandom(data.drinks)
        console.log(data.drinks);
    };

    // useEffect(() => {
    //     fetchRes()
    // }, []);

    const [random, setRandom] = useState([])
    const params = useParams();
    return (
        <div className="">
            <div className="row">
                <div className="input-group mb-3 mt-3 col-6" style={{ width: '500px', height: 'auto' }}>
                    <button className="my-button m-5" type="button" id="button-addon1" value='' onClick={fetchRes} ><i className="fas fa-cocktail"  style={{fontSize: '3em'}}></i></button>
                </div>
            </div>
            <div className="container col-6">
            {random.map((rec , index)=>{
		 
			return (
				<div key={index}>
					<Cards  rec={rec} />
				</div>
			)	
			})}
            </div>
            
        </div>
    );
};
                    

				
					
                    











RandomDrink.propTypes = {
    match: PropTypes.object
};
