import React from "react";
import { useState } from "react";
import Cards from "../Cards/Cards";
import planDeViajes from "../../data/data";



function DestinyCard (props){
    return (
        <>
        <div className="destiny_card">
            <h1>Destinos</h1>
            <Cards>
            </Cards>
        </div>
        </>
    )
}

export default DestinyCard;