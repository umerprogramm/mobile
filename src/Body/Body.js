import Video from '../assets/Video.mp4'
import './body.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Body() {
    return (
      <>
     <div class="bg-video-wrap">
        <video src={Video} loop muted autoPlay>
        </video>
        <div class="overlay">
        </div>
        <h1>Improve Your <span style={{color : 'green'}}>Skills</span> With Us 
        </h1>


      </div>
      <h4 style={{color:'white',textAlign:'center',paddingTop:'18px'}}>Use <span style={{color:'green'}}>Navbar</span>  button to access the <span style={{color:'green'}}>blogs</span> or <span style={{color:'green'}}>other pages😊</span></h4>
  
        </>
    )
}
