import React from "react";
import { useState } from "react";
import DestinyCard from "../Components/DestinyCard/DestinyCard";
import FoodCard from "../Components/FoodCard/FoodCard";
import HotelCard from "../Components/HotelCard/HotelCard";
import '../Screen/Screen.css'




function ScreenTravel (){
    return (
        <>
        <div className="screen">
            <h1>Agencia</h1>
            <DestinyCard></DestinyCard>
            <FoodCard></FoodCard>
            <HotelCard></HotelCard>
        </div>
        </>
    )
}

export default ScreenTravel;