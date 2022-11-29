import Navbar from "components/Navbar";
import Home from "pages/Home";
import Text from "pages/Text";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const Routes = ()=>(
    <BrowserRouter>
    <Navbar/>
        <Switch>
            <Route path='/' exact>
                <Home/>
            </Route>

            <Redirect from='/text' to='/text/one' exact/>
            <Route path='/text'>
                <Text/>
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes