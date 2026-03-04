import './App.css';
import Button from '../src/Components/Button';
import { useEffect, useRef } from 'react';

const SCREEN = {
    left: 0.332,
    top: 0.190,
    right: 0.668,
    bottom: 0.62,
    menuX: 0.05,
    menuY: 0.08, 
  };

function App() {
  const bgRef = useRef(null);
  const menuRef = useRef(null);
  const scanlineRef = useRef(null);

  const { left, top, right,bottom, menuX,menuY} = SCREEN;
  useEffect(() => {
    function positionElements() {
      const img = bgRef.current;
      const menu = menuRef.current;
      const scanline = scanlineRef.current;
      if (!img || !menu || !scanline) return;

      const naturalW = img.naturalWidth;
      const naturalH = img.naturalHeight;
      const containerW = img.clientWidth;
      const containerH = img.clientHeight;

      const scale = Math.max(containerW / naturalW, containerH / naturalH);
      const renderedW = naturalW * scale;
      const renderedH = naturalH * scale;
      const offsetX = (containerW - renderedW) / 2;
      const offsetY = (containerH - renderedH) / 2;

      // --- TUNE THESE to match your image ---
      // CRT screen bounds as % of the original image
      //const screenLeft   = 0.33203125;  // left edge of screen
      //const screenTop    = 0.1898148148148148;  // top edge of screen
      //const screenRight  = 0.66796875;  // right edge of screen
      //const screenBottom = 0.62;

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

      // Font scales with screen width
      const buttons = menu.querySelectorAll('.menu-Button');
      buttons.forEach(btn => {
        btn.style.fontSize = `${width * 0.038}px`;
      });
    }

    const img = bgRef.current;
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
  }, [left, top, right,bottom, menuX,menuY]);

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
        </div>
      </header>
    </div>
  );
}

export default App;