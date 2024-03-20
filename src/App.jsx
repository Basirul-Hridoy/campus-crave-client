import { Outlet } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import { StateContext } from './provider/GlobalStatemanagment';
import { useContext } from 'react';
function App() {
  const { setNavUserModal } = useContext(StateContext);
  const handleNavUeerModal = () => {
    setNavUserModal(false)
  }
  return (
    <div >
      <Navbar />
      <div onClick={handleNavUeerModal}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
