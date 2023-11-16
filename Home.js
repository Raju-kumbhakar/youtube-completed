import kalank from './images/kalank.jpg'
import avtar from './images/avtar.png'
import tseries from './images/tseries.png'
import bbkivines from './images/bb.jpg'
import carry from './images/carry.png'
import {GoHomeFill} from 'react-icons/go'
import {BsFire} from 'react-icons/bs'
import {MdOutlineSubscriptions, MdOutlineWatchLater} from 'react-icons/md'
import {BiSolidVideos, BiHistory} from 'react-icons/bi'

import Header from './Header'
import { Link } from 'react-router-dom';

import videosJson from './useful-data-main/videos.json'


function VideoGrid(props){
    let myVideo = props.myVideo;
    return (
        <div class="thumbnail">
            <div class="video">
            {/* <a href='/video'><img src={kalank} /></a> */}
            <Link to={`/video?id=${myVideo.id}`}><img class="thumbnail-home" src={myVideo.thumbnail.url} /></Link>
            </div>
            <div class="video-title">
                        <img src={myVideo.avtar} height={'40px'} width={'40px'}></img>
                    
                <div class="video-info">
                    <h4 class="track-title margin-0">
                        {/* Kalank Title Track - Lyrical | Alia Bhatt */}
                        {myVideo.title}
                    </h4>
                    <p class="margin-0 smaller-fontsize">
                        {/* T-Series */}
                        {myVideo.channelName}
                    </p>
                    <p class="margin-0 smaller-fontsize">
                        {myVideo.views} views . {myVideo.uploadedAt} ago</p>
                </div>
            </div>
        </div>
    );
}

function Home(){
   return (
        <div>
            <Header />
            <div class="main-section">
                <div class="main-left">
                    <button class="yt-side-button">
                        <GoHomeFill /> <span class="side-button-label">Home</span>
                    </button>
                    <button class="yt-side-button">
                        <BsFire /> <span class="side-button-label">Trending</span>
                    </button>
                    <button class="yt-side-button">
                        <MdOutlineSubscriptions /> <span class="side-button-label">Subscriptions</span>
                    </button>
                    <hr />
                    <button class="yt-side-button">
                        <BiSolidVideos /> <span class="side-button-label">Shorts</span>
                    </button>
                    <button class="yt-side-button">
                        <BiHistory /> <span class="side-button-label">History</span>
                    </button>
                    <button class="yt-side-button">
                        <MdOutlineWatchLater /> <span class="side-button-label">Watch Later</span>
                    </button>
                    <hr />
                    <h6 class="fav">Favourites &gt; </h6>
                    <button class="yt-side-button">
                        <img src={carry} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">Carry Minati</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={bbkivines} height={'30px'} width={'30px'}></img>

                        <span class="side-channel-label">BB ki Vines</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={"https://yt3.googleusercontent.com/5ozNNrQBUJY8TPt2BYo6fEL-07ilkWHVedWCGFjtvuHU0aYrg1Iop-LJvprodA1_9-MTv7G_YA=s176-c-k-c0x00ffffff-no-rj"} height={'30px'} width={'30px'}></img>

                        <span class="side-channel-label">Zee Music Co.</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={tseries} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">T-Series</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={"https://yt3.googleusercontent.com/ytc/APkrFKaHxAXRaNDDJNeCqaeeTAef0vMUr75hTZblVjTv1w=s176-c-k-c0x00ffffff-no-rj"} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">FactTechz</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={"https://yt3.googleusercontent.com/ytc/APkrFKbGkPzC5VJDs9tm7Zqg5MSEGqqKwamJ8V9PFx2Pbg=s176-c-k-c0x00ffffff-no-rj"} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">The Viral Fever</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={"https://yt3.ggpht.com/b42QCAmVJ0kzNNi10_HmhsdfPEATQATS80hbLyHVJcVm6drn5pKtC6MY6wTluXi5iZ8_is5Q_Q=s176-c-k-c0x00ffffff-no-rj-mo"} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">YRF</span>
                    </button>
                </div>
                <div className="main-right">   
                          <div className="main-right-top">
                            <div className='icons1'>All</div>
                            <div className='icons2'>Music</div>
                            <div className='icons3'>Live</div>
                            <div className='icons4'>Computer Science</div>
                            <div className='icons5'>Bollywood Music</div>
                            <div className='icons6'>Python</div>
                            <div className='icons7'>Explorin</div>
                            <div className='icons8'>Movies</div>
                            <div className='icons9'>Indian Pop-Music</div>
                            <div className='icons10'>Jee Mains</div>
                            <div className='icons11'>Javascript</div>
                            <div className='icons12'>Anime</div>
                            <div className='icon-scroll'></div>
                    </div>
                    <div class="main-right independent-scroll">
                    {videosJson.map((video) => {
                        return <VideoGrid myVideo={video}/>
                    })}
                </div>
            </div>
            </div>
            </div>
    )
}

export default Home;