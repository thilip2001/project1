import Content from "./pages/content/Content";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/signIn";
import SignUp from "./pages/signup/SignUp";
import TopBar from "./topbar/TopBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Youtube from "./pages/youtube/Youtube";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const user =false;
  return (
  <Router>
   <TopBar />
   <Switch>
     <Route exact path="/">
       <Home />
      </Route>
      <Route path="/signup">
       {user ? <Home/> :<SignUp />}
      </Route>
      <Route path="/signIn">
      {user ? <Home/> :<SignIn />}
      </Route>
      <Route path="/detail">
      {user ? <Home/> :<Detail/>}
      </Route>
      <Route path="/content">
      {user ? <Home/> :<Content />}
      </Route>
      <Route path="/youtube">
      {user ? <Home/> :<Youtube />}
      </Route>
      
   </Switch>

   </Router>
  );
}

export default App;
