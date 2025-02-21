// import PropTypes from 'prop-types/'
import { FaArrowLeftLong as Arrow } from "react-icons/fa6";
import { Link, useParams, useOutletContext, useLocation } from 'react-router-dom';

import './countryStyle.scss'


export default function Country() {
  const countries = useOutletContext();

  const { id } = useParams();

  const location = useLocation();

  const queryParam = location.state?.queryParam || ""

  const region = location.state?.region || "all"

  const country = countries.find(c => c.numericCode === id)

  if (!country) {
    return <p className="country__error-msg">Country not found!</p>
  }



  return (
      <>
        <div className="country__link-back">
          <Link to={`/?${queryParam}`}>
            <button className='country__btn'><Arrow /> Back to {region} countries</button>
          </Link>
        </div>

        <section className="country">
          <img className="country__flag-img" src={country.flags.svg} alt={`Flag of ${country.name}`} />

          <div className="country-info">
            <div className="country__detail">
              <h1 className='country__name'>{country.name}</h1>

              <div className="country__wrapper">
                <p className='country__info'>Native Name: </p>
                <span className="country__answer">{country.nativeName}</span>
              </div>

              <div className="country__wrapper">
                <p className='country__info'>Population:</p>
                <span className="country__answer">{country.population.toLocaleString("en-US")}</span>
              </div>

              <div className="country__wrapper">
                <p className='country__info'>Region:</p>
                <span className="country__answer">{country.region}</span>
              </div>

              <div className="country__wrapper">
                <p className='country__info'>Sub Region:</p>
                <span className="country__answer">{country.subregion}</span>
              </div>

              <div className="country__wrapper">
                <p className='country__info'>Capital:</p>
                <span className="country__answer">{country.capital || "No capital"}</span>
              </div>
            </div>

            <div className="country-info2">
              <div className="country__wrapper">
                <p className='country__info'>Top Level Domain:</p>
                <span className="country__answer">{country.topLevelDomain}</span>
              </div>

              <div className="country__wrapper">
                <p className='country__info'>Currencies:</p>
                <span className="country__answer">
                  {country.currencies?.map(currency => currency.name).join(", ") || "N/A"}
                </span>
              </div>

              <div className="country__wrapper">
                <p className='country__info'>Languages:</p>
                <span className="country__answer">
                  {country.languages?.map(lang => lang.name).join(", ")}
                </span>
              </div>
            </div>
          </div>
        </section>

        <h2 className="country__borders-title">Border Countries: </h2>

        <div className="border__countries">
          {country.borders ? (
            country.borders?.map(borderCode => {
              const borderCountry = countries.find(c => c.alpha3Code === borderCode);
              if (!borderCountry) return null;

              return (
                <Link
                  key={borderCountry.numericCode}
                  to={`/country/${borderCountry?.numericCode}`}
                  className="border__country-link"
                >
                  <button className="country__btn border" >
                    {borderCountry.name}
                  </button>
                </Link>
              )
            })
          ) : (
            <p>This country does not share borders with any other country.</p>
          )}
        </div>
      </>
  )
}
