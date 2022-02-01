import React from 'react'

//global style
import GlobalStyle from './components/GlobalStyle'

//Roteamento
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom'

//component pages
import AboutUs from './pages/AboutUs'
import Portfolio  from './pages/Portfolio'
import ContactMe from './pages/ContactMe'
import Nav from './components/Nav'

//switch --> routes
function App() {
  return (
    <div>
      <GlobalStyle/>
      <Nav/>
      <Routes>
        <Route path="/" element={<AboutUs/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<ContactMe/>} />
      </Routes>     

    </div>
  );
}

export default App;
