import NavBar from './Components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Expense from './Components/Expense'
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Expense />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
