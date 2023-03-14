import './App.css';
import Activities from './pages/Activities';
import Welcome from './pages/Welcome';
import {Routes, Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import DefCalendar from './pages/DefCalendar';
function App() {
  return (
      <Routes>
      <Route index element={<Welcome />} />
      <Route path="/Activities" element={<Activities />} />
      <Route path="/Search" element={<SearchPage/>}/>
      <Route path="/Calendar" element={<DefCalendar/>}/>
    </Routes>
  );
}

export default App;
