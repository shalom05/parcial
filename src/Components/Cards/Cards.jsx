import React from "react";
import { useState } from "react";
import '../Cards/Cards.css';



function Card (){
    const [card, setCard] = useState('');
    
    return (
        <>
            <div className="card">
                <input
                    type="radio" name="cards"
                    id="card" className="categoryOption" />
                <label htmlFor="card">
                    <img src="https://picsum.photos/200/300?random=1" alt="" />
                    <h2></h2>
                    <h3></h3>
                </label>
            </div>
        </>
    )
}

export default Card;