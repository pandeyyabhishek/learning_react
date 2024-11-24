import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define routes
const router = createBrowserRouter([
  { path: "/", element: <div>
     <NavBar></NavBar>
     <Home></Home>
  </div>},
  { path: "/about", element:  <div>
    <NavBar></NavBar>
     <About></About>
  </div>},
  { path: "/contact", element:  <div>
     <NavBar></NavBar>
     <Contact></Contact>
  </div> }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
