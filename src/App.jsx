import styles from './App.module.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {MovieDetails} from './pages/MovieDetails'
import {LandingPage} from './pages/LandingPage'

export const App = () => {
  return (
    <Router>
      <header>
        <Link to='/'><h1 className={styles.title}>Movies</h1></Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId"><MovieDetails/></Route>
          <Route exact path="/"><LandingPage/></Route>
          <Route path="/"><p className={styles.error}>Error 404: Page not found</p></Route>
        </Switch>
      </main>
    </Router>
  );
}



