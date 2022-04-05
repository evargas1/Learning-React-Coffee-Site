import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import TabScreen from './screens/TabScreen'
// import { Container } from 'react-bootstrap'


const welcome = "Hello World"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Container>
            <Routes>
              {/* <Route path="/" element={<MainScreen />} /> */}
              <Route path="/" element={<HomeScreen />} />
              <Route path="/tab/:id" element={<TabScreen />} />

            </Routes>
          </Container>
      </Router>
        
    </div>
  );
}

export default App;
