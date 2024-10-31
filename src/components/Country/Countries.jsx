import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country1/Country";
import './countries.css'



const Countries = () => {
    const [countries,setCountries]=useState([]);
    const [visitedCountries,setVisitedCountries]=useState ([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))

    },[])

    const handleVisitedCountry= country => {
        console.log('add to this your visited countries')
        const newVisitedCountries=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }

    return (
        <div>
            <h3>Countries:{countries.length}</h3>

            <div>
                <h5>Visited Countries:{visitedCountries.length}</h5>
                <ul>
                   {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                   }
                </ul>
            </div>

        <div className="countries-container">
            {
                countries.map(country=> <Country
                     key={country.cca3} 
                     handelVisitedCountry={handleVisitedCountry}
                      country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;