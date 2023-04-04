import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

import { MessageOutlined ,PlayCircleTwoTone} from '@ant-design/icons';
import './Light.css'
export const ThemeContext = createContext(null);

function Light() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {  

    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
       {/* <Theme/> */}
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          {/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /> */}
          <PlayCircleTwoTone onClick={toggleTheme} checked={theme === "dark"}  />
          
          
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Light;