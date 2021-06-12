import logo from './logo.svg';
//import './App.css';
import './style.css';
import imagesrc from "./imagesrc.jpg"

function App() {
    return ( <div className="App">
    <h1 className="titel-red"> Meriem Dridi </h1>
     <br/> 
    <img width="320" height="350" src={imagesrc} alt='image'/>
      <br/> 
    <img width="320" height="350" src='/imagepublic.jpg'/>
    <div>
    <iframe width="320" height="240" src="https://www.youtube.com/embed/wnHW6o8WMas" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
   </div>
 );
}       
export default App;