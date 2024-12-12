import React, { useContext } from 'react';
// import { UserContext } from '../App'; 
import { ThemeContext } from '../App';
const ChildC = () => {

  const {Theme ,setTheme} = useContext(ThemeContext);
function HandleClick(){

  if(Theme === 'light')
    setTheme('Dark');
  else
  setTheme('light');
}




// const user = useContext(UserContext);
  return (
    <div>
    
      <button onClick={HandleClick}>
              Change Thme
      </button>
 






      {/* <h1> {user.name} <br /> to Child C</h1> */}
     
    </div>
  );
}

export default ChildC;
