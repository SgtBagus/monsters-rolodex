import React from 'react';
import { Card } from '../card/card.component';

import './card-list.style.css';

export const CardList = ({ data }) => ( 
    <div className="card-list">
        {
            data.map(x => (
                <Card key={x.id} data={x}/>
            ))
        }
    </div>
)
