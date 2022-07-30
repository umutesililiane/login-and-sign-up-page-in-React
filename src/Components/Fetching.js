
    import React, {useEffect, useState} from 'react';
    import axios from 'axios';
    
    export const CountryList = () => {
        const [countries, setCountries] = useState([]);
        const [load, setLoad] = useState(false);
        const [error, setError] = useState('');
        
        useEffect(() => {
            axios.get('https://restcountries.com/v3.1/all')
                .then(res => {
                    console.log(res);
                    setCountries(res.data);
                    setLoad(true);
                })
                .catch(err => {
                    setError(err.message);
                    setLoad(true)
                })
        }, []);
        
       
        if (load) {
            return (<ul>
                {error ? <li>{error.message}</li> : countries.map((country, index) => <li key={index}>{country.name.common}</li>)}
            </ul>);
        } else {
            return (
                <div>
                    Loading...
                </div>
            );
        }
    };
 export default CountryList