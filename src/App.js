import './App.css';
import Button from '../src/Components/Button';
import { useEffect, useRef } from 'react';

function App() {
  const bgRef = useRef(null);
  const menuRef = useRef(null);
  const scanlineRef = useRef(null);

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
      const screenLeft   = 0.33203125;  // left edge of screen
      const screenTop    = 0.1898148148148148;  // top edge of screen
      const screenRight  = 0.66796875;  // right edge of screen
      //const screenBottom = 0.8851851851851852;  // bottom edge of screen
      const screenBottom = 0.62;

      const left   = offsetX + renderedW * screenLeft;
      const top    = offsetY + renderedH * screenTop;
      const width  = renderedW * (screenRight - screenLeft);
      const height = renderedH * (screenBottom - screenTop);

      // Position and size the scanline overlay to exactly cover the CRT screen
      scanline.style.left   = `${left}px`;
      scanline.style.top    = `${top}px`;
      scanline.style.width  = `${width}px`;
      scanline.style.height = `${height}px`;

      // Position menu inside the screen (top-left area of the CRT screen)
      menu.style.left = `${left + width * 0.10}px`;   // 8% from screen left
      menu.style.top  = `${top  + height * 0.08}px`;  // 12% from screen top

      // Font scales with screen width
      const buttons = menu.querySelectorAll('.menu-Button');
      buttons.forEach(btn => {
        btn.style.fontSize = `${width * 0.038}px`;
      });
    }

    const img = bgRef.current;
    const ro = new ResizeObserver(positionElements);
    ro.observe(img);

    if (img.complete) {
      positionElements();
    } else {
      img.addEventListener('load', positionElements);
    }

    return () => {
      ro.disconnect();
      img.removeEventListener('load', positionElements);
    };
  }, []);

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