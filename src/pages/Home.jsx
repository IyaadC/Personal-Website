import React from "react";

export default function Home() {
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
      <div style={{ height: '1.2em', flexShrink: 0 }} />
      <hr className="screen-divider" style={{ width: '100%', margin: '0.3em 0', flexShrink: 0 }} />
      <div style={{ flex: 1, overflowY: 'auto', paddingTop: '0.5em' }}>
        <h1 style={{ fontSize: '1.5em', marginBottom: '0.5em' }}>Hi, I'm Iyaad Cassim</h1>
        <h2 style={{ fontSize: '1.25em', marginBottom: '0.5em' }}>Software Engineer</h2>
        <p style={{ fontSize: '1em' }}>
          I like to challenge myself to use new technologies, build sleek software 
          solutions and enjoy showcasing my personality through my code.
        </p>
      </div>
    </div>
  );
}