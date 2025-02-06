// import PropTypes from 'prop-types/'
import { FaArrowLeftLong as Arrow } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import './countryStyle.scss'


export default function Country() {
  return (
    <>
      <section className="country">
        <Link className='link' to="/">
          <button className='country__btn'><Arrow /> Back</button>
        </Link>

        <h1 className='country__name'>Belgium</h1>

        <div className="country__wrapper">
          <p className='country__info'>Native Name: </p>
          <span className="country__answer">Belgie</span>
        </div>

        <div className="country__wrapper">
          <p className='country__info'>Population:</p>
          <span className="country__answer">11,319,511</span>
        </div>

        <div className="country__wrapper">
          <p className='country__info'>Region:</p>
          <span className="country__answer">Europe</span>
        </div>

        <div className="country__wrapper">
          <p className='country__info'>Sub Region:</p>
          <span className="country__answer">Western Europe</span>
        </div>

        <div className="country__wrapper">
          <p className='country__info'>Capital:</p>
          <span className="country__answer">Brussels</span>
        </div>


        <div className="country__wrapper">
          <p className='country__info'>Top Level Domain:</p>
          <span className="country__answer">.be</span>
        </div>

        <div className="country__wrapper">
          <p className='country__info'>Currencies:</p>
          <span className="country__answer">Euro</span>
        </div>

        <div className="country__wrapper">
          <p className='country__info'>Languages:</p>
          <span className="country__answer">Dutch, French, German</span>
        </div>

        <h2 className="country__borders">Border Countries: </h2>

        <button className="country__btn">France</button>
      </section>
    </>
  )
}
