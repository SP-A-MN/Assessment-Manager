import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationHeader from './templates/NavigationHeader/NavigationHeader';

function App() {
  return <>
      <NavigationHeader />

      <Routes>
          {/* <Route path="/" element={}></Route> */}
      </Routes>
    </>
  ;
}

export default App;
