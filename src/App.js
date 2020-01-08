import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Home from './components/Home'
import Table from './components/Table'

function App() {
  return (
    <div >
      <h1>Welcome</h1>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/table'>Table</Link>

        <Route path="/" exact={true} component={Home}/>
        <Route path="/table" component={Table}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
