import { createContext, useContext, useState} from 'react'

import './App.css'
import ChildA from './Components/ChildA';

                          // For Prctise 

  // Step1 : Creating a Context

  // const UserContext  = createContext();
// Step 2: Wrap the child COmponent in the provider
// Step3: Pass The Value in Provider
// step 4: Consumer k andr jakr data ko consume kr lo


                        // For Theme Change Project

const ThemeContext = createContext();                        

function App() {
const [Theme , setTheme] = useState("Light");





// const [data ,setData] = useState({name :" Value from Parent Narendra "})


  return (
    <>
          <h1>Dark And Light Mode Togle </h1>
          <ThemeContext.Provider value ={{Theme ,setTheme}} >
            <div id='Container'  style= {{backgroundColor:Theme==="light"?"beige" :"black"}} >
            <ChildA/>


            </div>
           
          </ThemeContext.Provider>





    {/* <h1>Implementation of UserContext Hook </h1> */}
    {/* <UserContext.Provider value={data}>
    <ChildA />
       
    </UserContext.Provider> */}
   
    </>
  )
}

export default App;
// export  {UserContext};
export  {ThemeContext};