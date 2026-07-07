import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Button(){
const { toggleTheme } = useContext(ThemeContext);

return(
    <button onClick={toggleTheme}>Switch theme</button>
);
}

