import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedcountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);


    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])


    const handleVisitedFlags = (flagPram) => {

        const newFlags = [...visitedFlags, flagPram];
        setVisitedFlags(newFlags);
    }



    const handlevisitedCountries = (countryparm1) => {

        console.log('add this country');

        const newVisitedCountry = [...visitedCountries, countryparm1];

        setVisitedcountries(newVisitedCountry);
    }


    return (
        <div>
            <h3 className="p-10 text-5xl">Countries: {countries.length} </h3>

            <div>
                <h5>Visited Countries : {visitedCountries.length} </h5>
                <ul>
                    {
                        visitedCountries.map(visitedCountry => <li

                            key={visitedCountry.cca3}

                        >{visitedCountry.name.common}</li>)
                    }
                </ul>
            </div>

            <br />

            {/* display flags */}

            <div>
                    {
                        visitedFlags.map(flag1 =><img src={flag1}></img>)
                    }
            </div>

            {/* display countries */}

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    countries.map(country => <Country

                        countryparam={country} key={country.cca3}

                        handlevisitedCountries={handlevisitedCountries}

                        handleVisitedFlags={handleVisitedFlags}


                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;