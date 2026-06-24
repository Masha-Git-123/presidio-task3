import {useNavigate} from "react-router-dom";
export default function Login(){
       const navigate=useNavigate();
       const handleLogin=()=>{
        localStorage.setItem(
            "token",
            "fake-jwt-token"
        );
        localStorage.setItem(
            "role",
            "admin"
        );
        navigate("/dashboard");
       };
       return(
        <div>
            <h1>Login Page </h1>
            <button onClick={handleLogin} >
                Login
            </button>
        </div>
       );
}