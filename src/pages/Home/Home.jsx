import Countries from "../../components/Countries/Countries";
import { Link, useOutletContext } from "react-router-dom";
import { PiMagnifyingGlassLight } from "react-icons/pi";

import './homeStyle.scss';


export default function Home() {
   const countries = useOutletContext(); 

   const countriesArray = countries.map(country => (
      <Link
         key={country.numericCode}
         className="home-country-link"
         to={`country/${country.numericCode}`}
         state={{ country }}
      >
         <Countries
            flag={country.flags.svg}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
         />
      </Link>
   ))


   return (
      <>
         <div className="wrapper">
            <section className="search">
               <PiMagnifyingGlassLight className='search__icon' size={24} />

               <input
                  className='search__input'
                  type="text"
                  placeholder='Search for a country...' />
            </section>

            <section className="select__container">
               <select className="select">
                  <option hidden>Filter by Region</option>
                  <option value="Africa">Africa</option>
                  <option value="America">America</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
               </select>

               <span className="custom-arrow"></span>
            </section >
         </div>

         <div className="countries__div">
            {countriesArray}
         </div>
      </>
   )
}
