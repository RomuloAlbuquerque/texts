import AuthorsList from "components/AuthorsList";
import AuthorsNavbar from "components/AuthorsNavbar";
import Brown from "components/temp-autores/Brown";
import Bukowski from "components/temp-autores/Bukowski";
import Freud from "components/temp-autores/Freud";
import Rodrigues from "components/temp-autores/Rodrigues";
import Thompson from "components/temp-autores/Thompson";
import { Route, Switch } from "react-router-dom";
import "./styles.css";

const Authors = () => {
  return (
    <div className="container-authores">
      <div className="container-button-authores">
        <AuthorsNavbar />
      </div>

      <div className="container-routes-authors">
        <Switch>
          <Route path="/authors/list" exact>
            <AuthorsList />
          </Route>

          <Route path="/authors/bukowski" exact>
            <Bukowski />
          </Route>

          <Route path="/authors/freud" exact>
            <Freud />
          </Route>

          <Route path="/authors/rodrigues" exact>
            <Rodrigues />
          </Route>

          <Route path="/authors/brown" exact>
            <Brown />
          </Route>

          <Route path="/authors/thompson" exact>
            <Thompson />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Authors;
