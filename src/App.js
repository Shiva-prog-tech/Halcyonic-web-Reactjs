import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Navigation  from './routes/navigation/Navigation.component';
import Home from './component/home/home.component';
import About from "./component/about/about.component";
import Career from './component/career/career.component';
import Contact from './component/contact/contact.component'
const App = () => {
  return (
   <Routes>
    <Route path="/" element={ <Navigation/> } >
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/career" element={<Career/>}/>
    <Route path="/contact" element={<Contact/>}/>

    </Route>
   </Routes>
  );
}

export default App;
