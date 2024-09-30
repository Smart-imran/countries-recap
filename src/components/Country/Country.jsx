
const Country = ({ countryparam }) => {

    console.log(countryparam)

    const { name, flags, population, area, cca3 } = countryparam;

    return (
        <div className="border-4 border-indigo-600 pl-8 rounded-md">
            <h3 className='p-1'>Name: {name.common}</h3>
            <img src={flags?.png} alt="" />
            <p >Population: {population}</p>
            <p>Area: {area}</p>
            <p className="font-bold">Code: {cca3}</p>
            <button>visited</button>
        </div>
    );
};

export default Country;