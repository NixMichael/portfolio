import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/Home'
import Projects from './screens/Projects'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/projects' component={Projects} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
