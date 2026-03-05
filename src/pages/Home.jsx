import React from "react"
import BackButton from "../Components/BackButton"

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
            //top: '20%',
            //left: '35%',


        }}>
            {/*Space for the back button */}
            <div style={{ height: '1.2em', flexShrink: 0 }} />

            {/*Space for the divider */}
            <hr className="screen-divider" style={{ width: '100%', margin: '0.3em 0', flexShrink: 0 }} />
            <div style={{
                flex: 1,             // takes all remaining height
                overflowY: 'auto',   // scrolls when content overflows
                paddingTop: '0.5em',
            }}>
                <h1 style={{ fontSize: '1.5em', marginBottom: '0.5em' }}>Welcome to my React App!</h1>
                <p style={{ fontSize: '1em' }}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
            </div>
        </div >
    );
}