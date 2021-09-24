
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import AddUsers from './components/users/AddUsers';
import EditUsers from './components/users/EditUser';
import Users from './components/users/Users';


function App() {
  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/contact" component={Contact} />
     <Route exact path="/users/add" component={AddUsers}/>
     <Route exact path="/users/edit/:id" component={EditUsers}/>
     <Route exact path="/users/view/:id" component={Users}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
