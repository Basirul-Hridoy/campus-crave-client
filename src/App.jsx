import { Outlet } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import { StateContext } from './provider/GlobalStatemanagment';
import { useContext } from 'react';
function App() {
  const { setNavUserModal, toggleNavbarMenu, setToggleNavbarMenu } = useContext(StateContext);
  const handleNavUeerModal = () => {
    setNavUserModal(false);
    setToggleNavbarMenu(false)
  }
  return (
    <div >
      <Navbar />
      <div onClick={handleNavUeerModal} className=''>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
