
import { useState } from 'react';
import './coutrey.css'
const Countrey = ({countrey}) => {
    const {name,flags,population, area}=countrey
    const [vistied, setVisited]=useState(false)
    const handleVisited=()=>{
        setVisited(!vistied)
    }
  
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src= {flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={handleVisited}>Visited</button>
            {
                vistied ? "I visited  Country" : "I wnna go visit"
            }
        </div>
    );
};

export default Countrey;