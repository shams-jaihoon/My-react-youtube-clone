import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Video from './Pages/Video/Video';
import { useState } from 'react';

function App() {

  const [sidebar, setSidebar] = useState(true);

  return (
    <>
     <Navbar sidebar={sidebar} setSidebar={setSidebar} />
     <Routes>
      <Route path='/' element={<Home sidebar={sidebar}/>} />
      <Route path='/video/:categoryId/:videoId' element={<Video />} />
     </Routes>
    </>
  )
}

export { App };
