import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FullCards } from "../views/fullCards";
import {Cards}  from "../views/cards"

export const PopularDrinks= ({data}) => {
    const fetchRes = async () => {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/popular.php`);
        const data = await res.json();
        setRecipeInp('');
        setRecipe(data.drinks)
        console.log(data.drinks);
    };

    useEffect(() => {
        fetchRes()
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        fetchRes()
    }

    const [recipe, setRecipe] = useState([])
    const [recipeInp, setRecipeInp] = useState([])
    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <div className="">
            <div className="d-flex justify-content-center align-items-center">
                <div className="input-group mb-3 mt-3" style={{ width: '500px', height: 'auto' }}>
                
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
              {/*el slice para limitar las cartas a 8 items y el map para hacer el loop*/}
            {recipe.slice(0,8)
            .map((rec , index)=>{
		 
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











PopularDrinks.propTypes = {
    match: PropTypes.object
};
