import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { CountryInterface } from "../../interface/CountryInterface";


export const Layout: React.FC = () => {
   const [countries, setCountries] = useState<CountryInterface[]>([]);

   const [darkMode, setDarkMode] = useState<boolean>(() => {
      const savedTheme: string | null = localStorage.getItem("darkTheme");
      
      return savedTheme !== null ? JSON.parse(savedTheme) as boolean : false
   })
   
   useEffect(() => {
      async function fetchData(): Promise<void> {
         try {
            const response = await fetch('/data/countries.json');
            const data: CountryInterface[] = await response.json();
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



   function handleTheme(): void {
      setDarkMode(previousMode => !previousMode);
   }


   return (
      <>
         <Header darkMode={darkMode} handleTheme={handleTheme} />

         <Outlet context={countries} />
      </>
   )
}
