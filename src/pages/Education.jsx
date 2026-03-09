import React, { useState } from "react";

export default function Education() {
  const [view, setView] = useState('menu');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      color: '#0de435',
      fontFamily: 'DotGothic16, monospace',
      width: '100%',
      height: '100%',
    }}>
      <div style={{ height: '1.2em', flexShrink: 0 }} />
      <hr className="screen-divider"
        style={{
          width: '100%',
          margin: '0.3em 0',
          flexShrink: 0
        }} />

      <div style={{
        flex: 1,
        overflowY: 'auto',
        paddingTop: '0.5em',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '0.8em'
      }}>

        {view === 'menu' && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8em'
          }}>
            <h1 style={{
              fontSize: '1.5em'
            }}>
              &gt;&gt; EDUCATION</h1>
            <button className="menu-Button"
              onClick={() => setView('bachelors')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                whiteSpace: 'nowrap'
              }}>
              &gt;&gt; BACHELORS DEGREE
            </button>
            {/* If I add any certificates, can add a button for them here. */}
            {/*
            <button className="menu-Button"
              onClick={() => setView('certificate')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                whiteSpace: 'nowrap'
              }}>
              &gt;&gt; CERTIFICATE
            </button>
            */}
          </div>
        )}
        
        {view === 'bachelors' && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.1em'
          }}>
            <button className="menu-Button"
              onClick={() => setView('menu')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                whiteSpace: 'nowrap'
              }}>
              &gt;&gt; BACK TO EDUCATION
            </button>
            <hr className="screen-divider"
              style={{
                width: '100%',
                margin: '0.3em 0'
              }} />
            <h1 style={{
              fontSize: '1.5em'
            }}>
              &gt;&gt; BACHELORS DEGREE</h1>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1em',
              width: '100%',
              alignItems: 'flex-start'
            }}>
              <div style={{
                flex: 1,
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '0.3em 0.5em',
                alignContent: 'start',
                alignItems: 'start',
                textAlign: 'left',
              }}>
                <p><strong>University:</strong></p>
                <p style={{ whiteSpace: 'nowrap' }}>University of Melbourne</p>

                <p><strong>Degree:</strong></p>
                <p>Bachelor of Science in Computing and Software Systems</p>

                <p><strong>Graduation Date:</strong></p>
                <p style={{ whiteSpace: 'nowrap' }}>Dec 2025</p>
              </div>
              <img src={process.env.PUBLIC_URL + "/unimelb-logo.png"} alt="University Logo" style={{
                width: '25%', padding: '0.5em', border: '2px solid #0de435',
                boxShadow: '0 0 8px #0de435', flexShrink: 0,
              }} />
            </div>
          </div>
        )}
        {/* View for certificate, if I get around to adding any certificates. */}
        {/*
        {view === 'certificate' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
            <button className="menu-Button" onClick={() => setView('menu')}
              style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              &gt;&gt; BACK TO EDUCATION
            </button>
            <hr className="screen-divider" style={{ width: '100%', margin: '0.3em 0' }} />
            <h1 style={{ fontSize: '1.5em' }}>&gt;&gt; CERTIFICATE</h1>
            <p style={{ fontSize: '1em' }}>Certificate info to be entered..</p>
          </div>
        )}
          */}

      </div>
    </div>
  );
}