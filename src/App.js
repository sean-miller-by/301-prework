import './App.css';
import React from 'react';
import { Main } from './Main';

function App() {
  const [count, setCount] = React.useState(0);
  console.log('count', count)
  return (
    <div className="App" id="test">
      <header className="App-header">
        <button onClick={(_e) => setCount(count+1)} style={{ width: 200 }} />
        {(count < 10) && <Main shouldFlex={count > 5} />}
      </header>
    </div>
  );
}

export default App;
