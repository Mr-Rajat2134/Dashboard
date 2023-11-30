// import { Divider } from '@mui/material';
import './App.css';
import Maindash from './Components/Maindash/Maindash';
import RightSide from './Components/RightSide/RightSide';
import Sidebar from './Components/Sidebar';


// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<div className='AppGlass' >
  <Sidebar/>
 
  <Maindash/>
<RightSide/>





</div>
     {/* <Routes>
      <Route></Route>
     </Routes> */}
    </div>
  );
}

export default App;
