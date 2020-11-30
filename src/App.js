import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/Home'
import Blog from './screens/Blog'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/blog' component={Blog} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
