import { Route, Switch } from "react-router-dom";
// import AboutUs from "./AboutUs";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import Header from "./Header";
import Home from "./Home";
// import HowItWorks from "./HowItWorks";
// import Navbar from "./navbar";
import About from "./pages/About";
import Service from "./pages/Service";
// import Services from "./Services";
import Error from "./pages/Error";
import ContactUs from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Route exact path="/contact" component={ContactUs}></Route>
        <Route component={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;
