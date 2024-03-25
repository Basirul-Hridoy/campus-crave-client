import { Outlet } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import { StateContext } from './provider/GlobalStatemanagment';
import { useContext } from 'react';
import useAuth from './Hook/useAuth';
import Loading from './components/Loading';
function App() {
  const { setNavUserModal, toggleNavbarMenu, setToggleNavbarMenu } = useContext(StateContext);
  const { loading } = useAuth();
  const handleNavUeerModal = () => {
    setNavUserModal(false);
    setToggleNavbarMenu(false)
  }

  if (loading) {
    return <Loading />
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
