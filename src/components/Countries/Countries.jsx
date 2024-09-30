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
        <div >
             <h3 className="p-10 text-5xl">Countries: {countries.length} </h3>
           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {
                countries.map(country => <Country
                
                countryparam={country} key={country.cca3}
                
                
                ></Country>)
            }
           </div>
           
        </div>
    );
};

export default Countries;