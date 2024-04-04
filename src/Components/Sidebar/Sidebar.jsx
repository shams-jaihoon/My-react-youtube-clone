import './Sidebar.css';
// import home from '../../assets/home.png';
import home2 from '../../assets/home2.png';
import shorts from '../../assets/shorts.png';
import subscribe from '../../assets/subscribe.png';
import game_icon from '../../assets/game_icon.png';
import sports from '../../assets/sports.png';
import trend from '../../assets/trending.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
// import jack from '../../assets/jack.png';
// import simon from '../../assets/simon.png';
// import sami from '../../assets/sami.jpg';
// import megan from '../../assets/megan.png';
// import cameron from '../../assets/cameron.png';



function Sidebar({sidebar,category,setCategory}) {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className='shortcut-links'>
            <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <img src={home2} alt="" /><p>Home</p>
            </div>
            <div className={`side-link shorts ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={shorts} alt="" /><p>Shorts</p>
            </div>
            <div className={`side-link ${category===15?"active":""}`} onClick={()=>setCategory(15)}>
                <img src={subscribe} alt="" /><p>Subscribed</p>
            </div>
            
            <hr />
        </div>
   
        <div className=" shortcut-links">
             <h3>Eplore</h3>

             <div className={`side-link ${category===23?"active":""}`} onClick={()=>setCategory(23)}>
                <img src={trend} alt="" /><p>Trending</p>
            </div>
             <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={game_icon} alt="" /><p>Game</p>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt="" /><p>Sports</p>
            </div>
           
            <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="" /><p>Technology</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="" /><p>Music</p>
            </div>
            <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="" /><p>News</p>
            </div>
        </div>

             {/* <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={jack} alt="" /><p>PewDiePie</p>
            </div>
            <div className="side-link">
                <img src={simon} alt="" /><p>MrBeast</p>
            </div>
            <div className="side-link">
                <img src={sami} alt="" /><p>Sami Yousuf</p>
            </div>
            <div className="side-link">
                <img src={megan} alt="" /><p>5 Minutes</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="" /><p>Nas Daily</p>
            </div>
        </div> */}
      
        
    </div>
  )
}

export default Sidebar
