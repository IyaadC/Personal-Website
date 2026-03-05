import React, {useEffect, useRef, useState} from 'react';

export default function Terminal({text, userInput: controlled, onChange}) {
  const [userInput, setUserInput] = useState('');
  const inputRef = useRef(null);

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
        setHasLinePrinted(false);
        return;
      }
      const cmd = userInput.trim().toLowerCase();

      switch(cmd) {
        case 'home':
          setUserInput('>> Navigating to Home...');
          // later: navigate('/home') goes here
          break;

        case 'education':
          setUserInput('>> Navigating to Education...');
          // later: navigate('/education') goes here
          break;

        case 'experience':
          setUserInput('>> Navigating to Experience...');
          // later: navigate('/experience') goes here
          break;

        case 'projects':
          setUserInput('>> Navigating to Projects...');
          // later: navigate('/projects') goes here
          break;

        case 'contact':
          setUserInput('>> Navigating to Contact...');
          // later: navigate('/contact') goes here
          break;

        case 'help':
          setUserInput('>> Commands: home, education, experience, projects, contact, clear');
          setHasLinePrinted(true);
          break;

        case 'clear':
          setUserInput('');
          break;

        case '':
          // do nothing if empty
          break;

        default:
          setUserInput(`>> Error: "${cmd}" not recognised. Type "help" for commands.`);
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

      <div className="terminal-input"> 
      <p>&gt;&gt; Type your command... ~ %   </p>
      <p className="cursor">█</p>

      <input
        ref={inputRef}
        className="terminal-input"
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />

    </div>
      
    
  );
}

