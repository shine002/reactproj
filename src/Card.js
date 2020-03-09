import React from 'react'



const Card = () => {
return (
<div>
    <h3>Travel</h3>
    <p>My travel <picture></picture></p>
    <img src={ require('./LIS.jpg') } height="50" width="100"/>
    
    </div>
);

}

export default Card;