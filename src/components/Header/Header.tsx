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

            <div
               onClick={props.handleTheme} className="header__div"
               tabIndex={0}
               aria-label="Change Theme"
            >
               {props.darkMode ?
                  (
                     <>
                        <LightMode size={18} />
                        <span>Light Mode</span>
                     </>
                  ) : (
                     <>
                        <DarkMode size={18} />
                        <span>Dark Mode</span>
                     </>
                  )}


            </div>
         </div>
      </header>
   )
}
