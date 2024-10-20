import { useEffect } from "react";
import { useState } from "react";
import Countrey from "../countrey/Countrey";
import './countries.css'


const Countres = () => {
    const [countries, setCountries] =useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h4>countries: {countries.length}</h4>
           <div className="country-content">
           {
                countries.map(countrey => <Countrey key={countrey.cca3} countrey={countrey}></Countrey>)
            }
            
           </div>
        </div>
    );
};

export default Countres;