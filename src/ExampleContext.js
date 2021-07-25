import React, { useContext } from 'react';

const moods = {
  happy: 'Happy',
  sad: 'Sad'
};

const MoodContext = React.createContext(moods);

export default function ExampleContext() {
  return (
    <MoodContext.Provider value={moods.happy}>
      <MyMood />
    </MoodContext.Provider>
  );
}

function MyMood() {
  return (
    <div>
      <p>hello</p>
      <CurrentMood />
    </div>
  );
}

function CurrentMood() {
  const currentmood = useContext(MoodContext);
  return <p>My Current Mood is {currentmood}</p>;
}
