

const CountryData = ({country,handelVisitedCountry,flagAdding}) => {
    console.log('this is all data',country,handelVisitedCountry,flagAdding)
    return (
        <div>
          <p><small>Country Data:{country.name.common}</small></p>
        </div>
    );
};

export default CountryData;