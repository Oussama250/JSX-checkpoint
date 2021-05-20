import './style.css';
import image from './imageInSrc.png';
import image2 from './imageInPublic.png';
import video from './myVideo.mp4';

function App() {
  return (
    <div className="App">
        <div style={{border:"1px solid black", maxWidth:"100vw"}}>
          <h1 className="title red">Oussama Beddiaf</h1>
          <br />
          <div className="imgs">
            <img src={image} alt="imageInSrc"/>
            {/* <br /> */}
            <img src={image2} alt="imageInPublic"/>
          </div>
        </div>
        <video width={320} height={240} controls>
          <source src={video} type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
