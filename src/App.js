import './App.css';
//import '../public/background.png';
import Button from '../src/Components/Button';

function App() {
  function handleClick(){
    console.log("Button is clicked !")
  }

  return (
    <div className="App">
      <header className="App-header" style = {{backgroundImage: "url('/background.png')"}}>
    
        <div className = "content-box">
        <img className='scanline-overlay' src='/vhs_scanline.png' alt="CRT Scanline Overlay" />
       
        <Button className="menu-Button" text=">> Home" onClick={handleClick}/>
        <br />   
        <Button className="menu-Button" text=">> Education" onClick={handleClick}/>
        <br />
        <Button className="menu-Button" text=">> Experience" onClick={handleClick}/>
        <br />
        <Button className="menu-Button" text=">> Projects" onClick={handleClick}/>
        <br />
        <Button className="menu-Button" text=">> Contact" onClick={handleClick}/>
        <br />
        
        </div>
        {/*<img src= "/background.png" alt = "Site's Background" /> */}
      
      </header>
    </div>
  );
}

export default App;
