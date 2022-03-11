import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FullCards } from "./fullCards";

export const RecipeBrowser = ({data}) => {
    const [recipe,setRecipe]=useState('')
    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <div  className="">
            <div className="d-flex justify-content-center align-items-center">
                <div className="input-group mb-3 mt-3" style={{ width: '500px', height: 'auto' }}>
                    <input type="text" className="form-control me-2 rounded" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"value={recipe} onChange={(e)=>setRecipe(e.target.value)} />
                    
                        <button className="button" type="button" id="button-addon1" onClick={()=>actions.getData(recipe)}>Button</button>
                    

                </div>
            </div>
            <div className="container">
                 {/* {store.recipe.map((rec, index) => <FullCards data={{
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
                    />)}  */}
            
            </div>
        </div>
    );
};







RecipeBrowser.propTypes = {
    match: PropTypes.object
};
