import CountryData from "../CountryData/CountryData";


const CountryDetail = (props) => {
    const {country,handelVisitedCountry,flagAdding}=props
    return (
        <div>
            <h4>Country Detail</h4>

          {/* <CountryData
          country={country}
          handelVisitedCountry={handelVisitedCountry}
          flagAdding={flagAdding}
          

          ></CountryData> */}

          <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;