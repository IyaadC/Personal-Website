import { useNavigate, useLocation } from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate();
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
            &gt;&gt; BACK
        </button>
    );
}