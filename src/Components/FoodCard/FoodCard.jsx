import React from "react";
import { useState } from "react";
import Cards from "../Cards/Cards";



function FoodCard (){
    return (
        <>
        <div className="food_card">
            <h1>Comida</h1>
            <Cards/>
        </div>
        </>
    )
}

export default FoodCard;