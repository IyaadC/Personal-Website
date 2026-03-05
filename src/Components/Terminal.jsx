import React, {useEffect, useRef, useState} from 'react';

export default function Terminal({text, userInput: controlled, onChange}) {
  const [userInput, setUserInput] = useState('');
  const inputRef = useRef(null);
  const [response,setResponse] = useState('');
  const [hasLinePrinted, setHasLinePrinted] = useState(false);

  // forward updates to parent if a handler is provided
  function handleChange(e) {
    if(hasLinePrinted){
      const newChar = e.target.value.slice(-1);
      setUserInput(newChar);
      setHasLinePrinted(false);
    }
    else{
      setUserInput(e.target.value);
    }
    onChange && onChange(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {

      if(hasLinePrinted){
        setUserInput('');
        setResponse('');
        setHasLinePrinted(false);
        return;
      }
      const cmd = userInput.trim().toLowerCase();

      switch(cmd) {
        case 'home':
          setResponse('>> Navigating to Home...');
          setUserInput('');
          setHasLinePrinted(true);
          // later: navigate('/home') goes here
          break;

        case 'education':
          setResponse('>> Navigating to Education...');
          setUserInput('');
          setHasLinePrinted(true);
          // later: navigate('/education') goes here
          break;

        case 'experience':
          setResponse('>> Navigating to Experience...');
          setUserInput('');
          setHasLinePrinted(true);
          // later: navigate('/experience') goes here
          break;

        case 'projects':
          setResponse('>> Navigating to Projects...');
          setUserInput('');
          setHasLinePrinted(true);
          // later: navigate('/projects') goes here
          break;

        case 'contact':
          setResponse('>> Navigating to Contact...');
          setUserInput('');
          setHasLinePrinted(true);
          // later: navigate('/contact') goes here
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

