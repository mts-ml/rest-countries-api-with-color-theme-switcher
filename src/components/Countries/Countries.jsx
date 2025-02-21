import PropTypes from 'prop-types'

import './countriesStyle.scss'


export default function Countries(props) {

   Countries.propTypes = {
      flag: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      population: PropTypes.number.isRequired,
      region: PropTypes.string.isRequired,
      capital: PropTypes.string,
   }


   return (
      <section className="countries">
         <img src={props.flag} width={100} height={100} alt={`Flag of ${props.name}`} />

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
