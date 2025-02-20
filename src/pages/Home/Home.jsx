import Countries from "../../components/Countries/Countries";
import { Link, useOutletContext, useSearchParams } from "react-router-dom";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { useRef } from "react";

import './homeStyle.scss';


export default function Home() {
   const countries = useOutletContext();

   const [searchParams, setSearchParams] = useSearchParams();

   const selectRef = useRef(null);

   const regionFilter = searchParams.get("region");

   function handleRegionChange(event) {
      const region = event.currentTarget.value.toLowerCase();
      setSearchParams({ region });
   }

   function handleClearFilter() {
      setSearchParams({});
      selectRef.current.value = "";
   }

   const displayedCountries = regionFilter ?
      countries.filter(country => country.region.toLowerCase() === regionFilter) : countries;

   const countriesArray = displayedCountries.map(country => (
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

            <div className="home__filter">
               <section className="select__container">
                  <select
                     className="select"
                     onChange={handleRegionChange}
                     ref={selectRef}
                  >
                     <option value="" hidden>Filter by Region</option>
                     <option value="Africa">Africa</option>
                     <option value="Americas">Americas</option>
                     <option value="Asia">Asia</option>
                     <option value="Europe">Europe</option>
                     <option value="Oceania">Oceania</option>
                  </select>

                  <span className="custom-arrow"></span>
               </section >

               <button className={`clear-filter-btn ${regionFilter ? "btn-visible" : ""}`} onClick={handleClearFilter}>Clear filter</button>
            </div>
         </div>


         <div className="countries__div">
            {countriesArray}
         </div>
      </>
   )
}
