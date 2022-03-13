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
        <div className="text-center">
            <div className="text-center">
                <div className="input-group mb-3 mt-3" style={{ width: '500px', height: 'auto' }}>
                    
                    <button className="button " type="button" id="button-addon1" value='' onClick={fetchRes} >Random</button>
                    
                </div>
            </div>
            {/* <div className="container">
                {store.recipe.map((rec, index) => <FullCards data={{
                    value1: rec.strDrink,
                    value2: rec.strInstructions,
                    value3: rec.strDrinkThumb,
                    value4: rec.strIngredient1,
                    value5: rec.strIngredient2,
                    value6: rec.strIngredient3,
                    value7: rec.strIngredient4,
                    value8: rec.strMeasure1,
                    value9: rec.strMeasure2,
                    value10: rec.strMeasure3,
                    value11: rec.strMeasure4,
                }}
                    key={index}
                />)}

            </div> */}
            <div className="container d-flex flex-wrap">
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
