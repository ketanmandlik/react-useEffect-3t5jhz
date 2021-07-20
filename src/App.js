import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // On every single render
  useEffect(() => {
    console.log('I am Render!');
  });

  // Only render when the component is render / on first mount only.
  //componentDidMount alternative
  useEffect(() => {
    console.log('I am render once only when the component is Mounted!');
  }, []);

  // On First Render + Whenever the dependency changes.
  // componentDidUpdate alternative
  useEffect(() => {
    console.log(`My Name is: ${name}`);

    return () => {
      //Clean up...
      console.log('We Unmounted!', name);
    };
  }, [name]);

  // First way to attached and de-attached listner or cleanup
  useEffect(() => {
    console.log('Attached Listner');
    window.addEventListener('resize', updateWindowWidth);

    return () => {
      console.log('De-attached Listner');
      window.removeEventListener('resize', updateWindowWidth);
    };
  });

  // Second way for clean up listner is simply add one empty array
  // So that it runs only once rather then attached and de-attached listners
  // To see result -> do console getEventListeners(window) it shows resize array
  // with number of elements.

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div>
      <h1>Hello React!</h1>
      <p>Start learning useEffect hook in react :)</p>
      <h2>Current window width : {windowWidth}</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}
