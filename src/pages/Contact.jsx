import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      zIndex: 999,
      color: '#0de435',
      fontFamily: 'DotGothic16, monospace',
      width: '100%',
      height: '100%',
    }}>
      {/* Space for back button */}
      <div style={{ height: '1.2em', flexShrink: 0 }} />

      {/* Divider */}
      <hr className="screen-divider" style={{
        width: '100%',
        margin: '0.3em 0',
        flexShrink: 0
      }} />

      {/* Content styling*/}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        paddingTop: '1em',
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
      }}>
        <h1 style={{
          fontFamily: 'DotGothic16, monospace',
          marginBottom: '0.5em',
          fontSize: '1em'
        }}>
          &gt;&gt; Here are my points of contact. I'm always looking for a new project to work on. Let's get in touch! •ᴗ•
        </h1>

        {/*GitHub Button*/}
        <a href="https://github.com/IyaadC"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none'
          }}>
          <button className="menu-Button" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5em',
            fontFamily: 'DotGothic16, monospace',
            whiteSpace: 'nowrap',
          }}>

            &gt;&gt;<FaGithub /> GITHUB
          </button>
        </a>

        {/*LinkedIn Button*/}
        <a href="https://www.linkedin.com/in/iyaad-cassim-792021259/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none'
          }}>
          <button className="menu-Button" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5em',
            fontFamily: 'DotGothic16, monospace',
            whiteSpace: 'nowrap',
          }}>
            &gt;&gt;<FaLinkedin /> LINKEDIN
          </button>
        </a>

        {/*Email  Button*/}
        <a href="mailto:iyaadcassim2001@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none'
          }}>
          <button className="menu-Button" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5em',
            fontFamily: 'DotGothic16, monospace',
            whiteSpace: 'nowrap',
          }}>
            &gt;&gt;<MdEmail /> EMAIL
          </button>
        </a>

      </div>
    </div>
  );
}