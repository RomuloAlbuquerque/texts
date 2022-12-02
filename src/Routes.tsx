import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Authors from "pages/Authors";
import Home from "pages/Home";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <div className="">
      <Navbar />
    </div>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Redirect from="authors" to="authors/list" exact />
      <Route path="/authors">
        <Authors />
      </Route>
    </Switch>
    <div className="fixed-bottom">
      <Footer />
    </div>
  </BrowserRouter>
);

export default Routes;
