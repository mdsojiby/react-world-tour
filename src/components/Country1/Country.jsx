
import { useState } from 'react';
import './Country.css'
const Country = ({country,handelVisitedCountry}) => {
    const {name,flags,population,area,cca3}=country;
    const [visited,setVisited]=useState(false)
    const handelVisited =()=>{
        setVisited(!visited)
        
    }

    
    return (
        <div className={`country  ${visited ? 'visited':'non-visited'}`}>
            <h3 style={{color:visited? 'purple': 'white' }}>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={()=>handelVisitedCountry(country)}>Add visited</button>
            <button onClick={handelVisited}>{visited ? 'visited' :'going'}</button>
            {
                visited ? 'i have visited this country':'i not visited country'
            }
        </div>
    );
};

export default Country;