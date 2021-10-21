import { HashRouter, Route, Switch } from "react-router-dom";

import Portfolio from './pages/Portfolio';

import { GlobalStyle } from './components/styles';

function App() {
  return (
    <HashRouter basename="/">
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Portfolio />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
