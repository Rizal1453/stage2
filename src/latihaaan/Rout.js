import React, { UseContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Apage from "./Apage";
import Bpage from "./Bpage";

function Rout (){

  return (
    <div>
    <UseContext.Provider>
      <Router>
        <Routes>
          <Route exact path="/aa" element={<Apage />} />
          <Route exact path="/menu-bensu" element={<Bpage />} />
        </Routes>
      </Router>
    </UseContext.Provider>
    </div>

  )
}
export default Rout
