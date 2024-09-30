import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(()=>{

        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setCountries(data))

    },[])

    return (
        <div>
            <h3 className="p-10 text-5xl">Countries: {countries.length} </h3>
            {
                countries.map(country => <Country
                
                countryparam={country} key={country.cca3}
                
                
                ></Country>)
            }
        </div>
    );
};

export default Countries;