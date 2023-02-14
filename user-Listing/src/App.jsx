import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Structure from "./pageStructure/Structure"
import LandingPage from "./components/landingPage/LandingPage"
import UserManagement from "./components/userListing/UserManagement"
function App() {
   return (
      <Router>
         <Routes>
            <Route element={<Structure />}>
               <Route path='/' element={<LandingPage />} />
               <Route path='/userManagement' element={<UserManagement />} />
            </Route>
         </Routes>
      </Router>
   )
}

export default App
