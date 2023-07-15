import React from 'react';

function App() {
  return (
    <div className="App">
      <Header title="Nafis is here" />
      <Content />
      <Footer />
    </div>
  );
}

function Header(props) {
  return <h1>{props.title}</h1>;
}

function Content() {
  const [displayText, setDisplayText] = React.useState('');

  const handleButtonClick = () => {
    const textAreaValue = document.getElementById('text-area').value;
    setDisplayText(textAreaValue);
  };

  return (
    <div>
      <textarea id="text-area" rows="4" cols="50">Hello I am Nafis</textarea>
      <button onClick={handleButtonClick}>Display Text</button>
      {displayText && <p>{displayText}</p>}
    </div>
  );
}

function Footer() {
  return <p>My favourite sport is soccer</p>;
}

export default App;
