import "./HomeVideos.css"
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
import { useState, useEffect } from "react";
import moment from "moment";



const HomeVideos = ({category}) => {

  const [data, setData] = useState([]);

  const fetchData = async () =>{
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url).then(response =>response.json()).then(data => setData(data.items))
  }

  useEffect(()=>{
    fetchData();
   },[category])

  return (
    <div className="feed">
      {data.map((item,index)=>{
        return(
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card' key={index}>
          <img src={item.snippet.thumbnails.medium.url} alt="thumnail1" />
          <h2>{item.snippet.title.slice(0, 30)}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{value_converter(item.statistics.viewCount)} Views &bull; {moment(item.snippet.publishedAt).fromNow()};</p>
        </Link>
        )
      })}
     
    </div>
  )
}

export default HomeVideos
