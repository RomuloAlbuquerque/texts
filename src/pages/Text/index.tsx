import "./style.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import One from "components/texts/One";
import Two from "components/texts/Two";
import Three from "components/texts/Three";
import Footer from "components/Footer";

const Text = () => {
  return (
    <>
      <div className="container-text">
        <div className="container-navbar">
          <Navbar />
        </div>
        <div className="container-router">
          <Switch>
            <Route path="/text/one" exact>
              <One />
            </Route>
            <Route path="/text/two" exact>
              <Two />
            </Route>
            <Route path="/text/three" exact>
              <Three />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Text;
