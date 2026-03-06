import { useNavigate } from "react-router-dom";

const NEXT_PAGE = {
  '/home':       '/education',
  '/education':  '/experience',
  '/experience': '/projects',
  '/projects':   '/contact',
  '/contact':    '/home',
};

export default function NextButton() {
  const navigate = useNavigate();
  const current = window.location.pathname;
  const next = NEXT_PAGE[current];

  if (!next) return null;  // don't render if no next page defined

  // Get the page name for the button label
  const label = next.replace('/', '').toUpperCase();

  return (
    <button
      className="menu-Button"
      onClick={() => navigate(next, { state: { from: current } })}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      &gt;&gt; NEXT: {label}
    </button>
  );
}