import Body from './Body/Body';
import OUR from './Body/OUR';
import Header from './header/Header';
import './App.css'
import Contact from './Body/Contact';
import Footer from './Footer/Footer';
import React from "react";
import {

  Switch,
  Route

} from "react-router-dom";
import Blogs from './Blogs/Blogs';
import About from './Body/AbouT';


function App() {
  return (

    <div className='app'>
    
       <Header/>
            <Route exact path='/' component={Body} />
   
         <Route  path='/about' component={About}/>
         <Route path='/blogs' component={Blogs}/>
           <Route path="/contact" component={Contact}/>
            <Footer/>
    
 

    
 
    </div>

    
  
  );
}

export default App;
