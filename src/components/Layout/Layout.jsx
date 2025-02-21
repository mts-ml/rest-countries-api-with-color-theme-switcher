import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";


export default function Layout() {
   const [countries, setCountries] = useState([]);

   const [darkMode, setDarkMode] = useState(() => {
      const savedTheme = localStorage.getItem("darkTheme");

      return savedTheme !== null ? JSON.parse(savedTheme) : false
   })

   useEffect(() => {
      async function fetchData() {
         try {
            const response = await fetch('/data/countries.json');
            const data = await response.json();
            setCountries(data);
         } catch (error) {
            console.log(`Erro: ${error}`);
         }
      }

      document.body.setAttribute("data-theme", darkMode ? "dark" : "");

      // Saves on localStorage
      localStorage.setItem("darkTheme", JSON.stringify(darkMode));

      fetchData();
   }, [darkMode])



   function handleTheme() {
      setDarkMode(previousMode => !previousMode);
   }


   return (
      <>
         <Header darkMode={darkMode} handleTheme={handleTheme}/>

         <Outlet context={countries} />
      </>
   )
}
