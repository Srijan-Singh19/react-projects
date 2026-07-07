import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Navbar(){
const {theme} = useContext(ThemeContext);
 return(
    <nav>
        <h1 style={{
            color:theme==="light"?"black":"white",
        }}>Theme Switcher</h1>
        <h2 style={{
          color: theme === "light" ? "black" : "white",
        }}>Current Theme: {theme}</h2>
    </nav>
 );
}