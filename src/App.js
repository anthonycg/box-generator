import logo from './logo.svg';
import './App.css';
import BoxGen from './components/BoxGen';

function App() {

  const squareStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: 'red'
}

  return (
    <div className="App">
      <BoxGen />
      {/* <div style={squareStyle}></div> */}
    </div>
  );
}

export default App;
