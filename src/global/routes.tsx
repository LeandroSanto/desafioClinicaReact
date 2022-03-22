import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { SideBar } from '../components/SideBarMenu';

import { Home } from '../pages/Home';
import { NewPatient } from '../pages/NewPatient';
import { MedicAgenda } from '../pages/MedicAgenda';

export function AppRoutes(){
  return(
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/newpatient" element={<NewPatient/>} />
        <Route path="/medicagenda" element={<MedicAgenda />} />
      </Routes>
    </Router>
  )
}