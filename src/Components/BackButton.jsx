import { useNavigate, useLocation } from "react-router-dom";

/* Component that returns to the previous page */
export default function BackButton() {
    //Changes to next page using navigate
    const navigate = useNavigate();
    //Tracks the current URL
    const location = useLocation();

    //Safety check to avoid crashing if someone goes directly by URL instead of normally.
    const prevLocation = location.state?.from || '/'; //Which page we came from (source)
    return (
        <button
            className="menu-Button" //Ensures behaviour is same as menu buttons, colours etc
            onClick={() => navigate(prevLocation)}
            style={{
                position: 'absolute',
                top: '29%',
                left: '34%',
                zIndex:999,
                display: 'inline-flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
            }}
        >   
            {/*Button label. */}
            &lt;&lt; BACK
        </button>
    );
}