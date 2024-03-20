import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/Home/Home"
import LoginPage from "../pages/Login"

const Router = () => {
  return (
<Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/register" element={<h1>OLA</h1>}/>
    <Route path="/login" element={<LoginPage/>}/>
</Routes>
  )
}

export default Router