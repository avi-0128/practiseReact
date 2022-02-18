import { BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import Header from './component/Header';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Post from "./Pages/Post";
import NotFound from "./Pages/NotFound";
import { useState } from "react";
function App() {

  const [login,setLogin] = useState(false);

  return (
   //basename="/avinash" forceRefresh
    <BrowserRouter >  
     <div className="App">
      <Header/>
      <button onClick={()=> setLogin(!login) }>{login?"Logout" : "Logoin"}</button>

    <Switch>
    <Route path="/" component={Home}exact />
    <Route path="/about" component={About}/>
    <Route path="/profile" >
    
    {login? <Profile/>:<Redirect to= "/" />}
    
  </Route>
    <Route path="/post/:id" component={Post}/>
    <Route component={NotFound} />
    </Switch>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
