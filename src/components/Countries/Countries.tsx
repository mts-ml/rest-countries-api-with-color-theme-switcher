import { CountryInterface } from '../../interface/CountryInterface'

import './countriesStyle.scss'


export const Countries: React.FC<CountryInterface> = (props) => {
   return (
      <section className="countries">
         <img
            src={props.flags?.svg}
            width={100}
            height={100}
            alt={`Flag of ${props.name}`}
         />

         <div className="countries__wrapper">
            <h2 className="countries__title">{props.name}</h2>

            <div className="countries__country">
               <p className="countries__info">Population:</p>

               <span className="countries__span">{props.population.toLocaleString('en-US')}</span>
            </div>

            <div className="countries__country">
               <p className="countries__info">Region:</p>

               <span className="countries__span">{props.region}</span>
            </div>

            <div className="countries__country">
               <p className="countries__info">Capital:</p>

               <span className="countries__span">{props.capital || "No capital"}</span>
            </div>
         </div>
      </section>
   )
}
