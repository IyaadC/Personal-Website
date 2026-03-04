import React, {useEffect, useRef, useState} from 'react';

export default function Terminal({text, userInput: controlled, onChange}) {
  const [userInput, setUserInput] = useState('');
  const inputRef = useRef(null);

  // forward updates to parent if a handler is provided
  function handleChange(e) {
    setUserInput(e.target.value);
    onChange && onChange(e.target.value);
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
        autoComplete="off"
      />

    </div>
      
    
  );
}

