import Main from './components/main/main';
import Login from './login/login';
import styles from './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className={styles.App}>
    <div className={styles.App_item}>
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App;
