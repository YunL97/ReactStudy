// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2> Let's get started</h2>
      <p>this is also visible</p>
      {/* <PriceUl>
asdasdasd
      </PriceUl> */}
    </div>
  );
}

export default App;

const PriceUl = ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1px 0px',
  overflow: 'hidden',
  marginBottom: '18px',
  '&:nth-of-type(5)': {
    justifyContent: 'end'
  },
  '@media (max-width: 426px)': {
    fontSize: '14px'
  }
})

