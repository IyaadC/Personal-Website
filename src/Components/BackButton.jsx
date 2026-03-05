import { useNavigate, useLocation } from "react-router-dom";

export default function BackButton(){
    const navigate = useNavigate();
    const location = useLocation();
    
    //Safety check to avoid crashing if someone goes directly by URL instead of normally.
    const prevLocation = location.state?.from || '/'; //Which page we came from (source)
    return (
    <button
      onClick={() => navigate(prevLocation)}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        //border: '3px solid yellow',
        color: '#0de435',
        fontFamily: 'DotGothic16, monospace',
        cursor: 'pointer',
        fontSize: 'inherit',
        letterSpacing: '0.125rem',
      }}
    >
      &gt;&gt; BACK
    </button>
  );
}