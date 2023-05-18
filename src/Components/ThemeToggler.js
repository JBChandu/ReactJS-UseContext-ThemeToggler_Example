import {useContext} from 'react';
import Context from '../Context/Context';

function ThemeToggler() {
const [themeMode,setThemeMode]=useContext(Context);

  return (
    <div>
      <h6><span><button style={{backgroundColor:"seagreen",color:"white",border:"none",borderRadius:"5px"}} onClick={()=>{setThemeMode(themeMode==="light"?"dark":"light")}}>switch</button></span>Theme Mode : <span>{themeMode==="light"?"On Light Mode":"On Dark Mode"}</span></h6>
    </div>
  )
}

export default ThemeToggler;
