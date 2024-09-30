import './Country.css'

const Country = ({countryparam}) => {

    console.log(countryparam)

    const {name, flags} = countryparam

    return (
        <div className="country">
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;