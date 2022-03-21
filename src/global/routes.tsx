import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { SideBar } from '../components/SideBarMenu';

import { Home } from '../pages/Home';

import '../global/App.css'

export function AppRoutes(){
  return(
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />}  />
      </Routes>
    </Router>
  )
}