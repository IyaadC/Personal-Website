import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';

//Terminal component that accepts user input and responds to commands like "home", "education", etc. to navigate to different pages. Also has a "help" command to list available commands, and a "clear" command to clear the input. Unrecognized commands show an error message.
export default function Terminal({text, userInput: controlled, onChange}) {
  const [userInput, setUserInput] = useState('');
  const inputRef = useRef(null);
  const [response,setResponse] = useState('');
  const [hasLinePrinted, setHasLinePrinted] = useState(false);

  //Used for routing via Terminal
  const navigate = useNavigate();

  // forward updates to parent if a handler is provided
  function handleChange(e) {
    // if a line has just been printed, replace the input with the new character instead of appending to it
    if(hasLinePrinted){
      const newChar = e.target.value.slice(-1);
      setUserInput(newChar);
      setHasLinePrinted(false);
    }
    // otherwise, update as normal
    else{
      setUserInput(e.target.value);
    }
    onChange && onChange(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      // if a line has just been printed, pressing Enter should clear the input and response for the next command
      if(hasLinePrinted){
        setUserInput('');
        setResponse('');
        setHasLinePrinted(false);
        return;
      }
      const cmd = userInput.trim().toLowerCase();

      switch(cmd) {
        // for each case, set the response to show the navigation message, clear the input, set hasLinePrinted to true to indicate a line has been printed, and then navigate to the appropriate page after a short delay (to allow the user to see the message)
        case 'home':
          setResponse('>> Navigating to Home...');
          setUserInput('');
          setHasLinePrinted(true);
          setTimeout(() => navigate('/home'), 800);

          
          break;

        case 'education':
          setResponse('>> Navigating to Education...');
          setUserInput('');
          setHasLinePrinted(true);
          setTimeout(() => navigate('/education'), 800);
          
          break;

        case 'experience':
          setResponse('>> Navigating to Experience...');
          setUserInput('');
          setHasLinePrinted(true);
          setTimeout(() => navigate('/experience'), 800);
          
          break;

        case 'projects':
          setResponse('>> Navigating to Projects...');
          setUserInput('');
          setHasLinePrinted(true);
          setTimeout(() => navigate('/projects'), 800);
          
          break;

        case 'contact':
          setResponse('>> Navigating to Contact...');
          setUserInput('');
          setHasLinePrinted(true);
          setTimeout(() => navigate('/contact'), 800);
          
          break;

        case 'help':
          setResponse('>> Commands: home, education, experience, projects, contact, clear');
          setUserInput('');
          setHasLinePrinted(true);
          break;

        case 'clear':
          setUserInput('');
          break;

        case '':
          // do nothing if empty
          break;

        default:
          setResponse(`>> Error: "${cmd}" not recognised. Type "help" for commands.`);
          setUserInput('');
          setHasLinePrinted(true);
          break;
      }
    }
  }
  // focus the invisible input on mount so typing starts after the cursor
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  
  return (

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      fontFamily: 'DotGothic16',
      fontSize: 'DotGothic16',
      color: '#0de435',
    }}>

      {/* Response — plain text, wraps naturally */}
      {response && (
        <span style={{
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
          width: '100%',
          marginBottom: '0.3em',
          color: '#0de435',
          textAlign: 'left',
          display:'block',
        }}>
          {response}
        </span>
      )}

      {/* Input row */}
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <span style={{ whiteSpace: 'nowrap', color:'white' }}>
          &gt;&gt; Type your command... ~ %&nbsp;
        </span>
        <input
          ref={inputRef}
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck={false}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            outline: 'none',
            flex: 1,
            minWidth: 0,
            fontFamily: 'DotGothic16',
            caretShape: 'block',
            caretColor: 'white',
          }}
        />
      </div>

    </div>
      
    
  );
}

