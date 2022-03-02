import React, { useState, useEffect  } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Favourites from './components/Favourites';
import Search from './components/Search';
const App = () => {
	
	return (
	
		<BrowserRouter>
			
			 <Switch>
              <Route exact path='/' component={Search} />
               <Route path='/fav' component={Favourites} />
              
          </Switch>

		</BrowserRouter>



	 
		
	);
};

export default App;
