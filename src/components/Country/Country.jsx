import { useState } from "react";

const Country = ({ countryparam , handlevisitedCountries }) => {

    //console.log(countryparam)

    const { name, flags, population, area, cca3 } = countryparam;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }

    // console.log(handlevisitedCountries);

    return (
        <div className={`border-4 border-indigo-600 pl-8 rounded-md ${visited ? 'bg-red-600' : ''}`}>

            <h3 className='p-1'>Name: {name.common}</h3>
            <img src={flags?.png} alt="" />
            <p >Population: {population}</p>
            <p>Area: {area}</p>
            <p className="font-bold">Code: {cca3}</p>


            <button onClick={()=>handlevisitedCountries(countryparam)} className="border-2 p-2 bg-indigo-500 text-white border-violet-600 rounded-md mr-6 ">Mark Visited</button><br />

            <button onClick={handleVisited} className="border-2 p-2 bg-indigo-500 text-white border-violet-600 rounded-md mt-4">{visited ? 'visited':'Going'}</button>

                {
                    visited ? 'I have visited' : 'I want to visited'
                }

        </div>
    );
};

export default Country;