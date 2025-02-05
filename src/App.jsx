import Header from './components/Header/Header'
import Countries from './components/Countries/Countries';
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { useEffect, useState } from 'react';

import './styles/globalStyle.scss'


function App() {
  const [countries, setCountries] = useState([])

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkTheme")

    return savedTheme !== null ? JSON.parse(savedTheme) : false
  })

  function handleTheme() {
    setDarkMode(!darkMode)
  }

  // const selectRef = useRef(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data/countries.json')
        const data = await response.json()
        setCountries(data)
      } catch (error) {
        console.log(`Erro: ${error}`)
      }
    }

    document.body.setAttribute("data-theme", darkMode ? "dark" : "light")
    
    // Saves on localStorage
    localStorage.setItem("darkTheme", JSON.stringify(darkMode))

    fetchData()
  }, [darkMode])

  const countriesArray = countries.map(country => (
    <Countries
      key={country.numericCode}
      flag={country.flags.svg}
      name={country.name}
      population={country.population}
      region={country.region}
      capital={country.capital}
    />
  ))

  // function handleRef() {
  //   selectRef.current ? selectRef.current.blur() : null
  // }

  return (
    <>
      <Header
        darkMode={darkMode}
        handleTheme={handleTheme}
      />

      <div className="wrapper">
        <section className="search">
          <PiMagnifyingGlassLight className='search__icon' size={24} />

          <input
            className='search__input'
            type="text"
            placeholder='Search for a country...' />
        </section>

        <section className="select__container">
          <select
            className="select"
          // onChange={handleRef}
          // ref={selectRef}
          >
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

export default App
