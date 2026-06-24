import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import User from "./pages/User";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleRoute from "./components/RoleRoute";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
      <Route path="/admin" element={<RoleRoute><Admin /></RoleRoute>} />
      <Route path="/user" element={<RoleRoute> <User /> </RoleRoute>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;