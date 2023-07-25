import React from "react";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Navbar from "./pages/Navbar";

//pages1
import Brand from "./Pages1/Brand";
import Apple from "./Pages1/Apple";
import Nokia from "./Pages1/Nokia";
import Samsung from "./Pages1/Samsung";

import {Routes, Route} from "react-router-dom";


const App = () => {


    return (
        <div>
             <Routes>
                    <Route  path="/brand"  element={ <Brand />} >
                            <Route  path=""  element={ <Apple />} /> 
                            <Route  path="nokia"  element={ <Nokia />} />
                            <Route  path="samsung"  element={ <Samsung />} />
                    </Route>
             </Routes>
        </div>
    );
}

export default App;



// Basics 1: 

// <Navbar />
//             <Routes> 
//                   <Route  path="/"  element={ <Home />} />
//                   <Route  path="/about"  element={ <About />} />
//                   <Route  path="/contact"  element={ <Contact />} />
//                   <Route  path="/blog"  element={ <Blog />} />

//              </Routes>