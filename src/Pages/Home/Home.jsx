
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.css'
import HomeVideos from '../../Components/HomeVideos/HomeVideos';
import { useState } from 'react';

function Home({sidebar}) {

    const [category,setCategory] = useState(0);

  return (
    <>
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
    <div className={`container ${sidebar?"":"large-container"}`}>
      <HomeVideos category={category} />
    </div>
    </>
  )
}

export default Home
