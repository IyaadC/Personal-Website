import React from "react"
import BackButton from "../Components/BackButton"

export default function Home() {
    return (
        <div style={{
            position: 'absolute',
            zIndex:999,
            color: '#0de435',
            fontFamily: 'DotGothic16, monospace',
            top: '20%',
            left: '35%',

        }}>
            <h1>Welcome to my React App!</h1>
            <p>This is the home page.</p>
            <BackButton/>
        </div>
    )
}