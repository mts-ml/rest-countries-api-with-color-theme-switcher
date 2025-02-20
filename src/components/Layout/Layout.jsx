import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";


export default function Layout() {
   const [countries, setCountries] = useState([])

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
      // document.body.setAttribute("data-theme", darkMode ? "dark" : "light")

      // // Saves on localStorage
      // localStorage.setItem("darkTheme", JSON.stringify(darkMode))

      fetchData()
   }, [])

   // const [darkMode, setDarkMode] = useState(() => {
   //    const savedTheme = localStorage.getItem("darkTheme")

   //    return savedTheme !== null ? JSON.parse(savedTheme) : false
   // })


   // function handleTheme() {
   //    setDarkMode(!darkMode)
   // }


   return (
      <>
         <Header />

         <Outlet context={countries} />
      </>
   )
}
