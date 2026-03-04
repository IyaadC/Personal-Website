import './App.css';
import { useEffect, useRef } from 'react';
import Button from '../src/Components/Button';
import Terminal from './Components/Terminal';

/* SCREEN contains the elements within the terminal that will be dynamically resized using
 * function positionElements() eg- Menu, TerminalEntry, TerminalLine etc */
const SCREEN = {
    //Defines screen boundaries (Leave as constants for now)
    left: 0.332,
    top: 0.190,
    right: 0.668,
    bottom: 0.62,
    //Menu coords
    menuX: 0.05,
    menuY: 0.08, 
    
    
  };

function App() {

  const bgRef = useRef(null);
  const menuRef = useRef(null);
  const scanlineRef = useRef(null);
  const dividerRef = useRef(null);
  const { left, top, right,bottom, menuX,menuY} = SCREEN;
  /* Runs useEffect after React renders the page.
  */
  useEffect(() => {
    /* Function does the relevant math to scale elements so they are where they should be
    */
    function positionElements() {
      // --
      requestAnimationFrame(() => {
      const img = bgRef.current;
      const menu = menuRef.current;
      const scanline = scanlineRef.current;
      const divider = dividerRef.current;
      if (!img || !menu || !scanline || !divider ) return;

      //Actual pixel sizes of the image itself. Eg- 3840x2160 & Never changes
      const naturalW = img.naturalWidth;
      const naturalH = img.naturalHeight;
      //How big the image element on the screen - Changes with resizing window.
      const containerW = img.clientWidth;
      const containerH = img.clientHeight;

      //Recreates what "scale". --
      const scale = Math.max(containerW / naturalW, containerH / naturalH);
      const renderedW = naturalW * scale;
      const renderedH = naturalH * scale;
      const offsetX = (containerW - renderedW) / 2;
      const offsetY = (containerH - renderedH) / 2;

    

      const left   = offsetX + renderedW * SCREEN.left;
      const top    = offsetY + renderedH * SCREEN.top;
      const width  = renderedW * (SCREEN.right - SCREEN.left);
      const height = renderedH * (SCREEN.bottom - SCREEN.top);

      // Position and size the scanline overlay to exactly cover the CRT screen
      scanline.style.left   = `${left}px`;
      scanline.style.top    = `${top}px`;
      scanline.style.width  = `${width}px`;
      scanline.style.height = `${height}px`;

      // Position menu inside the screen (top-left area of the CRT screen)
      menu.style.left = `${left + width * SCREEN.menuX}px`;   // 5% from screen left for menu
      menu.style.top  = `${top  + height * SCREEN.menuY}px`;  // 8% from screen top for menu

    
      // Font scales with screen width - apply to ALL text elements except divider
      const buttons = menu.querySelectorAll('.menu-Button');
      buttons.forEach(btn => {
        btn.style.fontSize = `${width * 0.038}px`;
      });

      
        requestAnimationFrame(() => {
        const menuRect   = menu.getBoundingClientRect();
        const imgRect    = img.getBoundingClientRect();
        const menuBottom = menuRect.bottom - imgRect.top;

        divider.style.left  = `${left + width * 0.05}px`;
        divider.style.top   = `${menuBottom + height * 0.02}px`;
        divider.style.width = `${width * 0.90}px`;
      });

    });
    }


    const img = bgRef.current;
    //Checks if window is resized. If so then calls positionElements again.
    const ro = new ResizeObserver(positionElements);
    ro.observe(img);

    window.addEventListener('resize', positionElements);
    if (img.complete) {
      positionElements();
    } else {
      img.addEventListener('load', positionElements);
    }

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', positionElements);  // cleanup
      img.removeEventListener('load', positionElements);
    };
  }, [left, top, right, bottom, menuX, menuY]); //Reruns whenever these vars change.

  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="content-box">
          <img ref={bgRef} className="bg-image" src="/background.png" alt="background" />
          <img ref={scanlineRef} className="scanline-overlay" src="/vhs_scanline.png" alt="CRT Scanline Overlay" />
          <div ref={menuRef} className="menu-container">
            <Button className="menu-Button" text=">> Home"       onClick={handleClick}/>
            <Button className="menu-Button" text=">> Education"  onClick={handleClick}/>
            <Button className="menu-Button" text=">> Experience" onClick={handleClick}/>
            <Button className="menu-Button" text=">> Projects"   onClick={handleClick}/>
            <Button className="menu-Button" text=">> Contact"    onClick={handleClick}/>
          </div>
         
          <div ref={dividerRef} className='p-container' >
            <hr className = 'screen-divider' />
            <Terminal />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;