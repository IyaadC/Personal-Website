import React, { useState } from "react";

export default function Experience() {
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8em' }}>
            <h1 style={{ fontSize: '1.5em', textAlign: 'center' }}>&gt;&gt; EXPERIENCE</h1>
            <button className="menu-Button" onClick={() => setView('job1')}
              style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              &gt;&gt; Intern @ CENMETRIX
            </button>

            {/* If I add any more jobs, can add buttons for them here. 
            <button className="menu-Button" onClick={() => setView('job2')}
              style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              &gt;&gt; JOB TITLE @ COMPANY 2
            </button>
            */}
          </div>
        )}

        {view === 'job1' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1em' }}>
            <button className="menu-Button" onClick={() => setView('menu')}
              style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              &gt;&gt; BACK TO EXPERIENCE
            </button>
            <hr className="screen-divider" style={{ width: '100%', margin: '0.3em 0' }} />
            <h1 style={{ fontSize: '1.5em' }}>&gt;&gt; INTERN @ CENMETRIX</h1>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1em', width: '100%', alignItems: 'flex-start' }}>
              <div style={{
                flex: 1, display: 'grid', gridTemplateColumns: 'auto 1fr',
                gap: '0.3em 0.5em', alignContent: 'start', alignItems: 'start', textAlign: 'left',
              }}>
                <p><strong>Company:</strong></p>
                <p style={{ whiteSpace: 'nowrap' }}>Cenmetrix</p>
                <p><strong>Role:</strong></p>
                <p>Internship</p>
                <p><strong>Duration:</strong></p>
                <p style={{ whiteSpace: 'nowrap' }}>June 2018 - July 2018</p>
                

              </div>
              <img src={process.env.PUBLIC_URL + "/company1-logo.png"} alt="Company Logo" style={{
                width: '40%', padding: '0.5em', border: '2px solid #0de435',
                boxShadow: '0 0 8px #0de435', flexShrink: 0,
              }} />

            </div>
            <p><strong>Description:</strong></p>
            <p style={{ marginTop: '0.5em', lineHeight: '1.6' }}>
              During my internship at Cenmetrix, I worked alongside the core development team to debug
              and test a client-facing application built in C. I contributed directly to identifying and
              resolving defects, helping ensure the final deliverable met client specifications. Beyond
              the technical work, I actively participated in team meetings which gave me early exposure
              to agile workflows and professional software development culture. I also assisted with
              client communication and the sales pipeline, giving me a broader understanding of how
              technical work connects to business outcomes.
            </p>
          </div>
        )}

        {/* If I add any more jobs, can add views for them here.
        {view === 'job2' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1em' }}>
            <button className="menu-Button" onClick={() => setView('menu')}
              style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              &gt;&gt; BACK TO EXPERIENCE
            </button>
            <hr className="screen-divider" style={{ width: '100%', margin: '0.3em 0' }} />
            <h1 style={{ fontSize: '1.5em' }}>&gt;&gt; JOB TITLE @ COMPANY 2</h1>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1em', width: '100%', alignItems: 'flex-start' }}>
              <div style={{
                flex: 1, display: 'grid', gridTemplateColumns: 'auto 1fr',
                gap: '0.3em 0.5em', alignContent: 'start', alignItems: 'start', textAlign: 'left',
              }}>
                <p><strong>Company:</strong></p>
                <p style={{ whiteSpace: 'nowrap' }}>Company Name</p>
                <p><strong>Role:</strong></p>
                <p>Job Title</p>
                <p><strong>Duration:</strong></p>
                <p style={{ whiteSpace: 'nowrap' }}>Jan 2023 - Dec 2023</p>
                <p><strong>Description:</strong></p>
                <p>Your job description here...</p>
              </div>
              <img src="/company2-logo.png" alt="Company Logo" style={{
                width: '25%', padding: '0.5em', border: '2px solid #0de435',
                boxShadow: '0 0 8px #0de435', flexShrink: 0,
              }} />
            </div>
          </div>
        )}
        */}

      </div>
    </div>
  );
}