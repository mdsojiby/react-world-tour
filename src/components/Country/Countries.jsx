import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country1/Country";
import './countries.css'



const Countries = () => {
    const [countries,setCountries]=useState([]);
    const [visitedCountries,setVisitedCountries]=useState ([])

    const [visitedflags,setVisitedFlags]=useState([])

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

    const flagAdding=flag=>{
        console.log('add all flaging')
        const newFlagAdding=[...visitedflags,flag]
        setVisitedFlags(newFlagAdding)
    }

    return (
        <div>
            <h3>Countries:{countries.length}</h3>

            {/* display countries */}

            <div>
                <h5>Visited Countries:{visitedCountries.length}</h5>
                <ul>
                   {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                   }
                </ul>
            </div>

            <div className="flag-container">

                {
                    visitedflags.map((flag,idx )=> <img  key={idx} src={flag}></img>
                    )
                }

            </div>

            {/* visited countries */}

        <div className="countries-container">
            {
                countries.map(country=> <Country
                     key={country.cca3} 
                     handelVisitedCountry={handleVisitedCountry}
                     flagAdding={flagAdding}
                      country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;