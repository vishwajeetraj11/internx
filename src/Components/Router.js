import {BrowserRouter as Router,Route ,Switch, Redirect} from "react-router-dom"
import Home from "./Home";
import Navigation from "./Navigation";
import Orders from "./Orders";
import Products from "./Products";
import Profile from "./Profile";

const AppRouter = () => (
    <Router>
      {/* <ScrollToTop /> */}
      <Navigation />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/orders" component={Orders} />
        <Route path="/products" component={Products} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
  
  export default AppRouter