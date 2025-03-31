import { Countries } from "../../components/Countries/Countries";
import { Link, useOutletContext, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { ThreeDots } from 'react-loader-spinner';
import { CountryInterface } from "../../interface/CountryInterface";

import './homeStyle.scss';


export const Home: React.FC = () => {
   const countries: CountryInterface[] = useOutletContext();

   const [searchParams, setSearchParams] = useSearchParams();

   const [searchCountry, setSearchCountry] = useState<string>("");

   const regionFilter: string | null = searchParams.get("region");

   function handleRegionChange(event: React.ChangeEvent<HTMLSelectElement>): void {
      const region = event.currentTarget.value.toLowerCase();
      setSearchParams({ region });
   }

   function handleClearFilter(): void {
      setSearchParams({});
   }

   function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>): void {
      setSearchCountry(event.currentTarget.value);
   }

   const displayedCountries = (regionFilter ?
      countries.filter(country => country.region.toLowerCase() === regionFilter) : countries)
      .filter(country => country.name.toLowerCase().includes(searchCountry.toLowerCase()));

   const countriesArray = displayedCountries.map(country => (
      <Link
         key={country.numericCode}
         className="home-country-link"
         to={`country/${country.numericCode}`}
         state={{
            queryParam: searchParams.toString(),
            region: regionFilter
         }}
      >
         <Countries
            flags={country.flags}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
         />
      </Link>
   ));



   return (
      countries.length > 0 ?
         <>
            <div className="wrapper">
               <section className="search">
                  <PiMagnifyingGlassLight className='search__icon' size={24} />

                  <label
                     className="sr-only"
                     htmlFor="searchCountry"
                  >
                     Search for a country
                  </label>
                  <input
                     className='search__input'
                     id="searchCountry"
                     type="text"
                     placeholder='Search for a country...'
                     value={searchCountry}
                     onChange={handleSearchChange}
                  />
               </section>

               <div className="home__filter">
                  <section className="select__container">
                     <select
                        className="select"
                        onChange={handleRegionChange}
                        value={regionFilter ? regionFilter.charAt(0).toUpperCase() + regionFilter.slice(1) : ""}
                        aria-label="Choose an option"
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

            <main className="countries__main">
               {countriesArray}
            </main>
         </>
         :
         <div id='loading'>
            <span>Loading...</span>
            <ThreeDots
               visible={true}
               height={80}
               width={80}
               color="rgb(80, 135, 167)"
               radius="9"
               ariaLabel="three-dots-loading"
            />
         </div>
   );
}
