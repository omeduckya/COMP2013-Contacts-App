import {Link, useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

export default function PrivatePage() {
    const [currentUser, setCurrentUser] = useState(()=> {
        const jwtToken = Cookies.get("jwt-authorization");
        if(!jwtToken) {
            return "";
        }      
        try {
            const decodedToken = jwtDecode(jwtToken);
            return decodedToken.username;
        } catch {
            return"";
        }
    });

    const navigate = useNavigate()
    useEffect(() => {
        if(!currentUser){
            navigate("/not-authorized")
        }
    }, [currentUser]);

    const handleLogout = () => {
        Cookies.remove("jwt-authorization");
        setCurrentUser("");
        navigate("/");
    };



    return(
        <div>
        <h1>Welcome {currentUser} </h1>
        <button onClick={() => handleLogout()}>Logout</button>
        </div>
    );

}