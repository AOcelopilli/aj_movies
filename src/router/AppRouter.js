import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import HomeScreen from "../pages/HomeScreen";

const AppRouter = () => {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={HomeScreen} />
      </Switch>
    </HashRouter>
  );
};

export default AppRouter;
