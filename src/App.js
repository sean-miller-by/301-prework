import './App.css';
import React from 'react';
import { Main } from './Main';
import Button from './Button';

function App() {
  const [count, setCount] = React.useState(0);
  console.log('count', count)
  return (
    <div className="App" id="test">
      <header className="App-header">
        <Button value={count} onChange={setCount} />
        {(count < 10) && <Main shouldFlex={count > 5} />}
      </header>
    </div>
  );
}

export default App;
