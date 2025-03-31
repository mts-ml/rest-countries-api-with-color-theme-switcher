import { IoMoon as DarkMode } from "react-icons/io5"
import { IoMoonOutline as LightMode } from "react-icons/io5";
import { Link } from 'react-router-dom';

import './headerStyle.scss'


interface HeaderProps {
   darkMode: boolean,
   handleTheme: () => void,
}


export default function Header(props: HeaderProps) {
   return (
      <header className="header">
         <div className="header__wrapper">
            <Link className="link" to="/">
               <h1 className="header__title">Where in the world?</h1>
            </Link>

            {props.darkMode ?
               <button
                  type="button"
                  className="header__theme-btn"
                  onClick={props.handleTheme}
               >
                  <LightMode size={20} />
                  <span>Light Mode</span>
               </button>
               :
               <button
                  type="button"
                  className="header__theme-btn"
                  onClick={props.handleTheme}
               >
                  <DarkMode size={20} />
                  <span>Dark Mode</span>
               </button>
            }
         </div>
      </header>
   )
}
