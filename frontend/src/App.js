import React from 'react'

//global style
import GlobalStyle from './components/GlobalStyle'

//Roteamento
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom'

//component
import AboutUs from './pages/AboutUs'


//switch --> routes
function App() {
  return (
    <div>
      <GlobalStyle/>

     <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutUs/>} />
        
        </Routes>
     
     </BrowserRouter>
      

    </div>
  );
}

export default App;
