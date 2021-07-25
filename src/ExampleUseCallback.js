import React, { useCallback } from 'react';

export default function ExampleUseCallback() {
  const [count, setCount] = React.useState(60);

  const handleCount = useCallback(() => {
    alert(`Count ${count}`);
    setCount(count + 10);
  }, [count]);

  return (
    <>
      <p>useCallback() Hook Example</p>
      <h4>Current counter value : {count}</h4>
      <SomeChild handleCount={handleCount} />
    </>
  );
}

function SomeChild({ handleCount }) {
  return (
    <>
      <button onClick={handleCount}>+</button>
    </>
  );
}
