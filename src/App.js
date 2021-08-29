import NavBar from './Components/NavBar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
