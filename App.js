import React from 'react';
import './App.css';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import ItemInfo from './Pages/ItemInfo'; 
// redux 
import {createStore} from 'redux'
import {initialStore} from './redux/initialstore'
import {reducer} from './redux/reducer' 
// react-redux
import {Provider} from 'react-redux' 
import SaveItems from './Pages/SaveItems';
import BuyItems from './Pages/BuyItems';



const store = createStore(reducer,initialStore) 
function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path="/item/:id" element={<ItemInfo/>} /> 
        <Route path="/saveitems" element={<SaveItems/>} /> 
        <Route path="/buyitems" element={<BuyItems/>} /> 
      </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
  