import "./App.css";
import Header from "./components/header/Header";
import Shop from "./components/shop/Shop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderReview from "./components/OrderReview/OrderReview";
import NotFound from "./components/NotFound/NotFound";
import OrderDone from "./components/OrderDone/OrderDone";

function App() {
  return (
    <div className="home">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Shop />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/order">
            <OrderReview />
          </Route>
          <Route path="/orderdone">
            <OrderDone />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
