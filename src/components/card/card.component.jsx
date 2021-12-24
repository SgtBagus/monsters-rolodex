import React from 'react';

import './card.style.css';

export const Card = ({ data }) => {
    const { id, name, email } = data;
    return(
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}