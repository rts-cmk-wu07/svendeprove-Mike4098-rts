import './App.css';
import Activities from './pages/Activities';
import Welcome from './pages/Welcome';
import {Routes, Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import DefCalendar from './pages/DefCalendar';
import Login from './pages/Login';
import ActivitiesDetails from './components/activitiesDetails/ActivitiesDetails';
function App() {
  return (
      <Routes>
      <Route index element={<Welcome />} />
      <Route path="/Activities" element={<Activities />} />
      <Route path="/Search" element={<SearchPage/>}/>
      <Route path="/Calendar" element={<DefCalendar/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path='activitiesdetails' element={<ActivitiesDetails/>}/>
    </Routes>
  );
}

export default App;
