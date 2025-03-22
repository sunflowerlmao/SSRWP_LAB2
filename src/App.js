import React from 'react';
import Button from './components/Button';
import Container from './components/Container';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
      <div className="App">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
        <Container>
          <h1>Hello World</h1>
          <Button label="Click Me" onClick={handleClick} />
        </Container>
      </div>
  );
}

export default App;
