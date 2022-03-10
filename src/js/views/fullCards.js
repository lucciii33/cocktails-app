import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// idDrink: "11001"

export const fullCards = () => {
    const { store, actions } = useContext(Context);
    const [icon, setIcon] = useState(false);
    const [addFav, setAddFav] = useState(0);
    const params = useParams();

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.-frqCpspuqwgiM1c2WufrAHaHE&pid=Api&P=0&w=174&h=166" className="img-fluid rounded-start" alt="..." />
                    {/* strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg" */}
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">strDrink: "Old Fashioned"</h5>
                        <h2 className="card-text">strInstructions: "Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.\r\nFill the glass with ice cubes and add whiskey.\r\n\r\nGarnish with orange twist, and a cocktail cherry."</h2>
                        <p className="card-text">strIngredient1: "Bourbon"</p>
                        <p className="card-text">strIngredient2: "Angostura bitters"</p>
                        <p className="card-text">strIngredient3: "Sugar"</p>
                        <p className="card-text">strIngredient4: "Water"</p>
                        <p className="card-text">strMeasure1: "4.5 cL"</p>
                        <p className="card-text">strMeasure2: "2 dashes"</p>
                        <p className="card-text">strMeasure3: "1 cube"</p>
                        <p className="card-text">strMeasure4: "dash"</p>
                        <p className="card-text">strTags: "IBA,Classic,Alcoholic,Expensive,Savory"</p>
                        <p className="card-text">strVideo: "https://www.youtube.com/watch?v=YsE_igrPXZs"</p>
                        <p className="card-text">strGlass: "Old-fashioned glass"</p>
                        <p className="card-text">strIBA: "Unforgettables"</p>
                        <p className="card-text">strCategory: "Cocktail"</p>
                        <p className="card-text">strAlcoholic: "Alcoholic"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

fullCards.propTypes = {
    match: PropTypes.object,
};