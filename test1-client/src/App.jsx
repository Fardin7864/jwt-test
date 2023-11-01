import {Outlet} from 'react-router-dom';
import Nav from './sheared/Navbar/Nav';

function App() {
  return (
    <div className=' max-w-7xl mx-auto'>
      <Nav></Nav>
      <Outlet/>
    </div>
  )
}

export default App
