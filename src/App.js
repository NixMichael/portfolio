import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './screens/Home'
import Projects from './screens/Projects'
import Contact from './screens/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
