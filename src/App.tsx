import './App.css';
import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home/Home';
import Admin from './containers/Admin/Admin';

const App = () => {
  return (
    <div>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/pages/:pageName" element={<Home/>}/>
          <Route path="/pages/admin" element={<Admin/>}/>
          <Route path="*" element={<h2>Not found</h2>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
