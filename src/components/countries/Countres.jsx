import { useEffect } from "react";
import { useState } from "react";
import Countrey from "../countrey/Countrey";


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
            {
                countries.map(countrey => <Countrey key={countrey.cca3} countrey={countrey}></Countrey>)
            }
        </div>
    );
};

export default Countres;