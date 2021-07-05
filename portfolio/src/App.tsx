import { HashRouter, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/home/container/Home";
import Projects from "./pages/projects/container/Projects";
import About from "./pages/about/container/About";

// Layout Components
import Header from "./layout/components/Header";
import Footer from "./layout/components/Footer";
import NoMatch from "./layout/components/NoMatch";

// CSS
import "./css/style.css";

const App = () => {
  return (
    <HashRouter basename="/">
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="*">
          <NoMatch />
        </Route>
      </Switch>

      <Footer />
    </HashRouter>
  );
};

export default App;
