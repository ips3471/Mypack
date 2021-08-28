import Main from './components/main/main';
import styles from './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import { useState } from 'react';

interface AppProps {
  itemRepository: any;
}
function App({itemRepository}: AppProps) {
  const [user, setUser] = useState<any | null>(null);
  
  const setUserId = (userId: any) => {
    setUser(userId);
    console.log(`user state updated: ${userId}`);
  }

  return (
    <div className={styles.App}>
    <div className={styles.App_item}>
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login user={user} setUserId={setUserId}/>
          </Route>
          <Route exact path="/main">
            <Main itemRepository={itemRepository} user={user} setUserId={setUserId} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App;


