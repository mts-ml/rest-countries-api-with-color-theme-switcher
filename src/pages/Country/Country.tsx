// import PropTypes from 'prop-types/'
import { Link, useParams, useOutletContext, useLocation } from 'react-router-dom';
import { CountryInterface } from "../../interface/CountryInterface";
import { FaArrowLeftLong as Arrow } from "react-icons/fa6";

import './countryStyle.scss'


interface CountryProps extends CountryInterface {
  topLevelDomain: string[]
  subregion: string
  borders: string[]
  currencies: { name: string }[]
  languages: { name: string }[]
  nativeName: string
}


export const Country: React.FC = () => {
  const countries: CountryProps[] = useOutletContext();

  const { id } = useParams();

  const location = useLocation();
  console.log(location)

  const queryParam: string = location.state?.queryParam || ""

  const region: string = location.state?.region || "all"

  const country: CountryProps | undefined = countries.find(c => c.numericCode === id)

  if (!country) {
    return <p className="country__error-msg">Country not found!</p>
  }


  return (
    <>
      <div className="country__link-back-div">
        <Link to={`/?${queryParam}`}
          className='country__link-back'
        >
          <Arrow aria-hidden="true" />
          Back to {region} countries
        </Link>
      </div>

      <section className="country" aria-live='polite'>
        <img className="country__flag-img" src={country.flags.svg} alt={`Flag of ${country.name}`} />
        <h1 className='country__name'>{country.name}</h1>

        <div className="country-info">
          <dl className="country__detail">
            <dt className="country__info">Native Name:</dt>
            <dd className="country__answer">{country.nativeName}</dd>

            <dt className="country__info">Population:</dt>
            <dd className="country__answer">{country.population.toLocaleString("en-US")}</dd>

            <dt className="country__info">Region:</dt>
            <dd className="country__answer">{country.region}</dd>

            <dt className="country__info">Sub Region:</dt>
            <dd className="country__answer">{country.subregion}</dd>

            <dt className="country__info">Capital:</dt>
            <dd className="country__answer">{country.capital || "No capital"}</dd>
          </dl>
        </div>

        <div className="country-detail2">
          <dl className="country__detail">
            <dt className='country__info tld'>Top Level Domain:</dt>
            <dd className="country__answer tldd">{country.topLevelDomain}</dd>

            <dt className='country__info'>Currencies:</dt>
            <dd className="country__answer">
              {country.currencies?.map(currency => currency.name).join(", ") || "N/A"}
            </dd>

            <dt className='country__info'>Languages:</dt>
            <dd className="country__answer">
              {country.languages?.map(lang => lang.name).join(", ")}
            </dd>
          </dl>
        </div>
      </section >

      <h2 className="country__borders-title">Border Countries:</h2>

      <div className="border__countries">
        {country.borders ? (
          country.borders.map(borderCode => {
            const borderCountry = countries.find(c => c.alpha3Code === borderCode);
            if (!borderCountry) return null;

            return (
              <div className="border__countries-div">
                <Link
                  key={borderCountry.numericCode}
                  to={`/country/${borderCountry?.numericCode}`}
                  className="border__countries-link"
                  aria-label={`Border country: ${borderCountry.name}, visit details.`}
                >
                  {borderCountry.name}
                </Link>
              </div>
            )
          })
        ) : (
          <p>This country does not share borders with any other country.</p>
        )}
      </div>
    </>
  )
}
