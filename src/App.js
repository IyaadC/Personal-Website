import './App.css';
import { useEffect, useRef } from 'react';
import Button from './Components/Button';
import Terminal from './Components/Terminal';
import { Navigate, Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';

//Pages imported
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import BackButton from './Components/BackButton';
import NextButton from './Components/NextButton';

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
  //Routing/ Navigation
  const navigate = useNavigate();
  const location = useLocation(); // Used so positionElements() reruns during navigation

  //
  const bgRef = useRef(null);
  const menuRef = useRef(null);
  const scanlineRef = useRef(null);
  const dividerRef = useRef(null);
  const terminalRef = useRef(null);
  const backButtonref = useRef(null);
  const nextButtonRef = useRef(null);

  //const homeRef = useRef(null);
  const pageRefs = {
    home: useRef(null),
    contact: useRef(null),
    education: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
  };

  const { left, top, right, bottom, menuX, menuY } = SCREEN;
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
        const terminal = terminalRef.current;
        const back = backButtonref.current;
        const next = nextButtonRef.current;
        //const home = homeRef.current;
        //if (!img || !menu || !scanline || !divider || !terminal) return;
        if (!img || !scanline) return;

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



        const left = offsetX + renderedW * SCREEN.left;
        const top = offsetY + renderedH * SCREEN.top;
        const width = renderedW * (SCREEN.right - SCREEN.left);
        const height = renderedH * (SCREEN.bottom - SCREEN.top);

        // Position and size the scanline overlay to exactly cover the CRT screen
        if (scanline) {
          scanline.style.left = `${left}px`;
          scanline.style.top = `${top}px`;
          scanline.style.width = `${width}px`;
          scanline.style.height = `${height}px`;



          const pageStyle = {
            left: `${left + width * SCREEN.menuX}px`,
            top: `${top + height * SCREEN.menuY}px`,
            width: `${width * 0.90}px`,
            height: `${height * 0.90}px`,
            fontSize: `${width * 0.038}px`,
          };

          Object.values(pageRefs).forEach(ref => {
            if (ref.current) Object.assign(ref.current.style, pageStyle);
          });
        }

        if (menu) {
          // Position menu inside the screen (top-left area of the CRT screen)
          menu.style.left = `${left + width * SCREEN.menuX}px`;   // 5% from screen left for menu
          menu.style.top = `${top + height * SCREEN.menuY}px`;  // 8% from screen top for menu
          // Font scales with screen width - apply to ALL text elements except divider
          const buttons = menu.querySelectorAll('.menu-Button');
          buttons.forEach(btn => {
            btn.style.fontSize = `${width * 0.038}px`;
          });
        }
        if (back) {
          back.style.left = `${left + width * SCREEN.menuX}px`;
          back.style.top = `${top + height * SCREEN.menuY}px`;
          back.style.fontSize = `${width * 0.038}px`;

          //Hides backButton on main menu page. Displayed on all others.
          back.style.display = location.pathname === '/' ? 'none' : 'block';
        }
        if (next) {
            next.style.left = `${left + width * (1 - SCREEN.menuX) - next.offsetWidth}px`; // right aligned
            next.style.top = `${top + height * SCREEN.menuY}px`;
            next.style.fontSize = `${width * 0.038}px`;
            next.style.display = location.pathname === '/' ? 'none' : 'block';
          }


        requestAnimationFrame(() => {

          if (menu && divider) {
            // const menuRect = menu.getBoundingClientRect();
            // const imgRect = img.getBoundingClientRect();
            // const menuBottom = menuRect.bottom - imgRect.top;

            // Replaced using getBoundingClientRect() with pure math calculating size of menu.
            const fontSize = width * 0.038;
            const lineHeight = fontSize * 1.2;   // match your CSS line-height
            const gap = fontSize * 0.45;   // match your CSS gap in .menu-container
            const numButtons = menu.querySelectorAll('.menu-Button').length;
            const menuTop = top + height * SCREEN.menuY;
            const menuBottom = menuTop + (numButtons * lineHeight) + ((numButtons - 1) * gap);

            divider.style.left = `${left + width * 0.05}px`;
            divider.style.top = `${menuBottom + height * 0.03}px`;
            divider.style.width = `${width * 0.90}px`;

            if (terminal) {
              const dividerBottom = menuBottom + height * 0.02 + 2;
              terminal.style.left = `${left + width * 0.05}px`;
              terminal.style.top = `${dividerBottom + height * 0.02}px`;
              terminal.style.width = `${width * 0.90}px`;
              terminal.style.fontSize = `${width * 0.04}px`;
            }
          }




        });

      });
    }


    const img = bgRef.current;
    //Checks if window is resized. If so then calls positionElements again.
    const ro = new ResizeObserver(positionElements);
    ro.observe(img);


    window.addEventListener('resize', positionElements);

    //Ensures re-render is caught when navigating
    if (img.complete) {
      positionElements();
      setTimeout(positionElements, 50);  // catches post-navigation render
      setTimeout(positionElements, 250);
      setTimeout(positionElements, 500);

    } else {
      img.addEventListener('load', positionElements);
    }

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', positionElements);  // cleanup
      img.removeEventListener('load', positionElements);
    };
  }, [left, top, right, bottom, menuX, menuY, location.pathname]); //Reruns whenever these vars change.

  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    //Entire application wrapped around BrowserRouter.-->Enables routing.

    <div className="App">
      <header className="App-header">
        <div className="content-box">
          {/*The background and scanlines stay regardless of the route */}
          <img ref={bgRef} className="bg-image" src="/background.png" alt="background" />
          <img ref={scanlineRef} className="scanline-overlay" src="/vhs_scanline.png" alt="CRT Scanline Overlay" />

          {/* Content changes for each page */}
          <Routes>
            <Route path="/" element={
              <>

                <div ref={menuRef} className="menu-container">
                  <Button className="menu-Button" text=">> Home" onClick={() => navigate('/home', { state: { from: '/' } })} />
                  <Button className="menu-Button" text=">> Education" onClick={() => navigate('/education')} />
                  <Button className="menu-Button" text=">> Experience" onClick={() => navigate('/experience')} />
                  <Button className="menu-Button" text=">> Projects" onClick={() => navigate('/projects')} />
                  <Button className="menu-Button" text=">> Contact" onClick={() => navigate('/contact')} />
                </div>

                <div ref={dividerRef} className='p-container' >
                  <hr className='screen-divider' />
                </div>
                <div ref={terminalRef} style={{ position: 'absolute', zIndex: 998 }}>
                  <Terminal />
                </div>
              </>
            } />
            <Route path="/home" element={
              <div ref={pageRefs.home} style={{ position: 'absolute', zIndex: 999, overflowY: 'auto', overflowX: 'hidden' }}>
                <Home />
              </div>
            } />
            <Route path="/contact" element={
              <div ref={pageRefs.contact} style={{ position: 'absolute', zIndex: 999, overflow: 'hidden' }}>
                <Contact />
              </div>
            } />
            <Route path="/education" element={
              <div ref={pageRefs.education} style={{ position: 'absolute', zIndex: 999, overflow: 'hidden' }}>
                <Education />
              </div>
            } />
            <Route path="/experience" element={
              <div ref={pageRefs.experience} style={{ position: 'absolute', zIndex: 999, overflow: 'hidden' }}>
                <Experience />
              </div>
            } />
            <Route path="/projects" element={
              <div ref={pageRefs.projects} style={{ position: 'absolute', zIndex: 999, overflow: 'hidden' }}>
                <Projects />
              </div>
            } />
          </Routes>
          <div ref={backButtonref} style={{ position: 'absolute', zIndex: 999 }}>
            <BackButton />
          </div>
          <div ref={nextButtonRef} style={{ position: 'absolute', zIndex: 999 }}>
            <NextButton />
          </div>
        </div>
      </header>
    </div>

  );
}

export default App;