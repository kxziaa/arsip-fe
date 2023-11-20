import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Beranda from './pages/Beranda';
import SuratKeluar from './pages/SuratKeluar';
import SuratMasuk from './pages/SuratMasuk';
import Disposisi from './pages/Disposisi';
import EditMasuk from './components/EditMasuk';
import EditKeluar from './components/EditKeluar';
import Login from "./components/Login"
import Users from './pages/Users';
import HalEditUser from './pages/HalEditUser';
import DisposisiMasuk from './pages/DisposisiMasuk';
import DisposisiKeluar from './pages/DisposisiKeluar';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/beranda" element={<Beranda />} />
      <Route path="/suratkeluar" element={ <SuratKeluar />} />
      <Route path="/suratmasuk" element={<SuratMasuk />} />
      <Route path="/disposisi" element={<Disposisi />} />
      <Route path="/dispmasuk" element={<DisposisiMasuk />} />
      <Route path="/dispkeluar" element={<DisposisiKeluar /> }  />
      <Route path="suratmasuk/editmasuk/:id" element={<EditMasuk />} />
      <Route path="suratkeluar/editkeluar/:id" element={<EditKeluar />} />
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/edit/:id" element={<HalEditUser /> } />
    </Routes>
  </Router>
  );
}

export default App;
