
import { useState, useCallback, useEffect, useRef } from 'react';
import './index.css';

function App() {
  const [len, setLen] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPass] = useState('');

  const passRef = useRef(null);

  const PasswordGenratorr = useCallback(() => {
    let pas = '';
    let str = 'ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllow) str += '0123456789';
    if (charAllow) str += '!@#$%^&*()_';

    for (let i = 1; i <= len; i++) {
      let charr = Math.floor(Math.random() * str.length);
      pas += str.charAt(charr);
    }
    setPass(pas);
  }, [len, numAllow, charAllow, setPass]);

  const copyPassToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  useEffect(() => {
    PasswordGenratorr();
  }, [len, numAllow, charAllow, PasswordGenratorr]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={pass}
          className="outline-none w-full py-1 px-3"
          placeholder="pass"
          readOnly
          ref={passRef}
        />
        <button
          onClick={copyPassToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={len}
            className="cursor-pointer"
            onChange={(e) => setLen(e.target.value)}
          />
          <label>length: {len}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numAllow}
            id="numberInput"
            onChange={() => setNumAllow((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllow}
            id="characterInput"
            onChange={() => setCharAllow((prev) => !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App