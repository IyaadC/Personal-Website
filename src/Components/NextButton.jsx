import { useNavigate, useLocation } from "react-router-dom";

//Routing for next page
const NEXT_PAGE = {
  '/home':       '/education',
  '/education':  '/experience',
  '/experience': '/projects',
  '/projects':   '/contact',
  '/contact':    '/',
};
//Labels for the next button, matching the above routes
const NEXT_LABEL = {
    '/home':       'EDUCATION',
    '/education':  'EXPERIENCE',
    '/experience': 'PROJECTS',
    '/projects':   'CONTACT',
    '/contact':    'MAIN MENU',
};

//Component that navigates to the next page in the sequence defined above
export default function NextButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const current = location.pathname;
  const next = NEXT_PAGE[current];

  if (!next) return null;  // don't render if no next page defined

  // Get the page name for the button label
  const label = NEXT_LABEL[current];

  return (
    <button
    //Ensures behaviour is same as menu buttons, colours etc.
      className="menu-Button"

      //goes to next page using "next" and also passes the previous page it moved from using "from:current"
      onClick={() => navigate(next, { state: { from: current } })}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      {/*Button label with next button + next page name.*/}
      &gt;&gt; NEXT: {label}
    </button>
  );
}