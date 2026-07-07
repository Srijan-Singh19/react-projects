import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

export default function App(){
const [theme, setTheme]= useState("light");
const toggleTheme =()=>{
  setTheme(theme==="light"?"dark":"light");
};
return(
<ThemeContext.Provider value={{theme, toggleTheme}}>
  <div style={{
    backgroundColor: theme === "light" ? "#ffffff" : "#1a1a1a",
          color: theme === "light" ? "#000000" : "#ffffff",
          minHeight: "100vh",
          padding: "20px",
          transition: "0.3s",
  }}>
<Navbar/>
<Button/>
</div>
</ThemeContext.Provider>
);
}