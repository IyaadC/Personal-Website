import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
export default function Projects() {
  const [view, setView] = useState('menu');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      color: '#0de435',
      fontFamily: 'DotGothic16, monospace',
      width: '100%',
      height: '100%',
      textAlign: 'left',
    }}>
      <div style={{ height: '1.2em', flexShrink: 0 }} />
      <hr className="screen-divider" style={{ width: '100%', margin: '0.3em 0', flexShrink: 0 }} />

      <div style={{ flex: 1, overflowY: 'auto', paddingTop: '0.5em', display: 'flex', flexDirection: 'column', fontSize: '0.8em' }}>

        {view === 'menu' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8em'}}>
            <h1 style={{ fontSize: '1.5em', textAlign: 'center' }}>&gt;&gt; PROJECTS</h1>
            <button className="menu-Button" onClick={() => setView('project1')}
              style={{ display: 'inline-flex', alignItems: 'left' }}>
              &gt;&gt; PROJECT 1 : Backend for Curtin Health Project Team
            </button>
            <button className="menu-Button" onClick={() => setView('project2')}
              style={{ display: 'inline-flex', alignItems: 'left' }}>
              &gt;&gt; PROJECT 2 : Personal Portfolio Website (this website!)
            </button>
          </div>
        )}

        {view === 'project1' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1em' }}>
            <button className="menu-Button" onClick={() => setView('menu')}
              style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              &gt;&gt; BACK TO PROJECTS
            </button>
            <hr className="screen-divider" style={{ width: '100%', margin: '0.3em 0' }} />
            <h1 style={{ fontSize: '1.5em' }}>&gt;&gt; PROJECT 1</h1>
            <div style={{
              display: 'grid', gridTemplateColumns: 'auto 1fr',
              gap: '0.3em 0.5em', alignContent: 'start', alignItems: 'start', textAlign: 'left',
            }}>
              <p><strong>Name:</strong></p>
              <p>Curtin University Health Project Backend</p>
              <p><strong>Tech Stack:</strong></p>
              <p>PgAdmin, Postgres, Postman, Go (Gin framework), figma.</p>
              <p><strong>Description:</strong></p>
              <p>Acting as the project lead, I spearheaded the development of the backend for the Curtin Health Project team. Using the Go framework as the design choice to create a sophisticated, scalable and high performance system to store sensitive patient data, diagnostic results and medical test information with different user levels of access.</p>
            </div>
          </div>
        )}

        {view === 'project2' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1em' }}>
            <button className="menu-Button" onClick={() => setView('menu')}
              style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              &gt;&gt; BACK TO PROJECTS
            </button>

            <hr className="screen-divider" style={{ width: '100%', margin: '0.3em 0' }} />


            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <h1 style={{ fontSize: '1.5em' }}>&gt;&gt; PROJECT 2</h1>
      <a href="https://github.com/IyaadC/Personal-Website" target="_blank" rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}>
        <button className="menu-Button"
          style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
          &gt;&gt;<FaGithubSquare /> VIEW ON GITHUB
        </button>
      </a>
    </div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'auto 1fr',
              gap: '0.3em 0.5em', alignContent: 'start', alignItems: 'start', textAlign: 'left',
            }}>
              <p><strong>Name:</strong></p>
              <p>Personal Portfolio Website</p>
              <p><strong>Tech Stack:</strong></p>
              <p>Figma, React.js, Tailwind CSS, HTML, Javascript.</p>
              <p><strong>Description:</strong></p>
              <p>By developing a prototype in figma and implementing it with React.js and Tailwind CSS, I created a fallout themed CRT style responsive and visually appealing portfolio website to showcase my skills and projects.</p>
              
            </div>
          </div>
        )}

      </div>
    </div>
  );
}