import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Header from './components/Header'
import Scroller from './components/Scroller'
import Home from './screens/Home'
import Projects from './screens/Projects'
import Contact from './screens/Contact'

function App() {
  // New scroll bar
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      // document.getElementsByClassName('scroller-bar')[0].style.top = `${window.pageYOffset}px`
      document.getElementsByClassName('scroller-bar')[0].style.top = `${(window.innerHeight / 430) * window.pageYOffset}px`
    })
  })

  return (
    <div className="App">
      <Header />
      <Scroller />
      <Menu />
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
