import AboutUs from './AboutUs';
import ContactUs from './ContactUs'
import Policies from './Policies'
import Profile from './Profile'
import Home from './Home'
import ProductList from './ProductList'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import Fryers from './Fryers';
import Cylinders from './Cylinders';
import Categories from './Categories';
import AddCart from './AddCart';
import Details from './Details'
import Search from './Search';
import Radius from './Radius';
const Main = () => {
    return (
<Router basename="/Website_outcast"> 
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Home">
        <Home />
      </Route>

      <Route path="/Radius">
        <Radius />
      </Route>
     
      <Route exact path="/website-outcast-solutions">
        <Home />
      </Route>

      <Route path="/signin">
        <SignIn />
      </Route>

      <Route path="/forgotpassword">
        <ForgotPassword />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/Search">
        <Search />
      </Route>

      <Route path="/productlist">
        <ProductList />
      </Route>

      <Route path="/fryers">
        <Fryers />
      </Route>

      <Route path="/cylinders">
        <Cylinders />
      </Route>

      <Route path="/Categories">
        <Categories />
      </Route>

      <Route path="/addcart">
        <AddCart />
      </Route>
          
      <Route exact path="/Aboutus">
        <AboutUs />
      </Route> 
      <Route exact path="/Details">
        <Details />
      </Route> 

      <Route path="/contactus">
        <ContactUs />
      </Route>

      <Route path="/Policies">
        <Policies />
      </Route>
      
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch> 
</Router> 
);
}

export default Main;
