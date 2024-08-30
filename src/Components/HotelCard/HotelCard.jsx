import React from "react";
import { useState } from "react";
import Cards from "../Cards/Cards";
import planDeViajes from "../../data/data";




function HotelCard (){
    return (
        <>
        <div className="hotel_card">
            <h1>{hoteles}</h1>
            <Cards>{planDeViajes.map((planDeViajes, index) => (
                <planDeViajes>
                    key = {index}
                    nombre={planDeViajes.nombre}
                    costo= {planDeViajes.costo}
                </planDeViajes>
            ))}</Cards>
        </div>
        </>
    )
}

export default HotelCard;